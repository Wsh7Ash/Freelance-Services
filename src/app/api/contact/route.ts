import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // TODO: Add your email service integration here
    // For now, we'll just return a success response
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'There was an error submitting your message. Please try again.' },
      { status: 500 }
    );
  }
} 