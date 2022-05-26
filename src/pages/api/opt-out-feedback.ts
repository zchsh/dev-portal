import { NextApiRequest, NextApiResponse } from 'next'
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // Only allow POST for this endpoint
  if (request.method !== 'POST') {
    response.status(404).json({
      meta: {
        status_code: 404,
        status_text: 'Not Found',
      },
    })
    return
  }

  // Validate Request Headers
  if (request.headers['content-type'] !== 'application/json') {
    response.status(400).json({
      meta: {
        status_code: 400,
        status_text: 'Bad Request',
      },
      errors: [
        {
          msg: 'expects header Content-Type: application/json',
        },
      ],
    })
    return
  }

  // Ensure `primary_opt_out_reason` is specified
  if (!request.body.primary_opt_out_reason) {
    response.status(400).json({
      meta: {
        status_code: 400,
        status_text: 'Bad Request',
      },
      errors: [
        {
          msg: 'Required body key `primary_opt_out_reason` is not provided',
        },
      ],
    })
    return
  }

  // Ensure `opt_out_page_url` is specified
  if (!request.body.opt_out_page_url) {
    response.status(400).json({
      meta: {
        status_code: 400,
        status_text: 'Bad Request',
      },
      errors: [
        {
          msg: 'Required body key `opt_out_page_url` is not provided',
        },
      ],
    })
    return
  }

  // Filter the body for any keys that aren't included in this list
  const allowedKeys = [
    'segment_anonymous_id',
    'primary_opt_out_reason',
    'details',
    'opt_out_page_url',
  ]
  const filteredBody = {}
  allowedKeys.forEach((key) => {
    if (typeof request.body[key] !== 'undefined') {
      filteredBody[key] = request.body[key]
    }
  })

  try {
    // Load up the Google Spreadsheet
    const doc = new GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID)
    await doc.useServiceAccountAuth({
      client_email: process.env.FEEDBACK_SERVICE_EMAIL,
      private_key: process.env.FEEDBACK_PRIVATE_KEY,
    })
    await doc.loadInfo()

    // Add a Row with the users feedback to the sheet
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow(filteredBody)

    // OK
    response.status(200).json({
      meta: {
        status_code: 200,
        status_text: 'OK',
      },
    })
  } catch (err) {
    console.error('Google Sheet Submission Error:', err)
    response.status(500).json({
      meta: {
        status_code: 500,
        status_text: 'Internal Server Error',
      },
    })
  }
}
