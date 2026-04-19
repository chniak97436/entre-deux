"use client"
import { useState } from 'react'
import Iris from '../../components/Iris';

export default function page() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });
            if (response.ok) {
                setSuccess(true);
                setEmail('');
                setMessage('');
            } else {
                console.error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur de réseau:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <form onSubmit={(e) => formSubmit(e)}
                className="flex flex-col w-[90%] border border-emerald-300 rounded-lg shadow-xl p-4">
                <h1 className='text-xl text-center text-b font-bold roboto'>NOUS CONTACTER...!</h1>
                <div className='shadow-lg'>
                    <label htmlFor="email" className="block text-v text-sm font-medium my-4">Votre adresse e-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border border-emerald-300 shadow-sm focus:border-emerald-500 text-b outline-none sm:text-sm p-2"
                        placeholder="exemple@exemple.com"
                        required
                    />
                </div>
                <div className='shadow-lg'>
                    <label htmlFor="message" className="block text-v text-sm font-medium my-4">Votre message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full rounded-md border border-emerald-300 shadow-sm focus:border-emerald-500 text-b outline-none sm:text-sm p-2"
                        placeholder="Votre message ici..."
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors disabled:bg-gray-400"
                    disabled={loading}
                >
                    {loading ? 'Envoi...' : 'Envoyer'}
                </button>
                {success && <p className="text-green-500 mt-4">Message envoyé avec succès !</p>}
            </form>
        </>
    )
}
