import { emailRegex, phoneRegex } from '../../../lib/utils/regex';
import { prisma } from '../../../lib/prisma';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Nom, email et message requis" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Format email invalide" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Optional phone validation
    if (phone && !phoneRegex.test(phone)) {
      return new Response(JSON.stringify({ error: "Format téléphone invalide" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    await prisma.contact.create({
      data: { 
        name, 
        email, 
        phone: phone || null, 
        message 
      },
    });
    
    return new Response(JSON.stringify({ message: "Message envoyé avec succès" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur contact:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
