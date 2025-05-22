import { NextApiRequest, NextApiResponse } from 'next';
import { createEnvelope } from '@/lib/docusign/client';
import docusign from 'docusign-esign';
import { docusignConfig } from '@/lib/docusign/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { candidateName, email, offerDetails, personalInfo } = req.body;

    // Generate PDF document
    const pdfResponse = await fetch(`${req.headers.origin}/api/generate-offer-pdf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ offerDetails, personalInfo })
    });

    if (!pdfResponse.ok) {
      throw new Error('Failed to generate PDF');
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
    const envelope = await createEnvelope(candidateName, email, pdfBuffer);

    const apiClient = new docusign.ApiClient();
    apiClient.setBasePath(docusignConfig.basePath);

    const recipientViewRequest = {
      authenticationMethod: 'none',
      clientUserId: '1',
      recipientId: '1',
      returnUrl: `${req.headers.origin}/virtual-offer/complete`,
      userName: candidateName,
      email: email
    };

    const envelopesApi = new docusign.EnvelopesApi(apiClient);
    if (!envelope.envelopeId) {
      throw new Error('Envelope ID is undefined');
    }
    const viewUrl = await envelopesApi.createRecipientView(
      docusignConfig.accountId,
      envelope.envelopeId,
      { recipientViewRequest }
    );

    res.status(200).json({ signingUrl: viewUrl.url });
  } catch (error) {
    console.error('DocuSign error:', error);
    res.status(500).json({ error: 'Failed to create signing session' });
  }
}
