import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    role: string;
}

// const ContactForm = ({ isOpen, onClose, role }: ContactFormProps) => {
//     const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
//     const showPopup = (message: string, type: 'success' | 'error') => {
//         setNotification({ message, type });
//         setTimeout(() => {
//             setNotification(null);
//         }, 3000);
//     };

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });


//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         const formData = new FormData(form);
//         console.log("Form submitted:", formData);

//         fetch('https://formspree.io/f/mwpbllae', {
//             method: 'POST',
//             body: formData,
//             headers: {
//                 Accept: 'application/json',
//             },
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     showPopup("Thank you for reaching out! I'll be in touch.", 'success');
//                     form.reset();
//                     onClose();
//                 } else {
//                     showPopup('Submission failed. Please try again.', 'error');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 showPopup('Submission failed. Please try again.', 'error');
//             });
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//             <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h3 className="text-2xl font-bold">Get in Touch</h3>
//                         <Button variant="ghost" size="icon" onClick={onClose}>
//                             <X className="h-4 w-4" />
//                         </Button>
//                     </div>

//                     <p className="text-muted-foreground mb-6">
//                         Let's discuss how I can help you as a {role.toLowerCase()}.
//                     </p>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Name</label>
//                             <input
//                                 type="text"
//                                 id='name'
//                                 name='name'
//                                 className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
//                                 placeholder="John Doe"
//                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-2">Email</label>
//                             <input
//                                 type="email"
//                                 id='email'
//                                 name='email'
//                                 placeholder='email@example.com'
//                                 className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
//                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-2">Subject</label>
//                             <input
//                                 type="text"
//                                 id='subject'
//                                 name='subject'
//                                 placeholder="Subject of your message"
//                                 className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
//                                 onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-2">Message</label>
//                             <Textarea
//                                 className="min-h-[120px]"
//                                 id='message'
//                                 name='message'
//                                 placeholder="Type your message here..."
//                                 rows={4}
//                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         <div className="flex gap-3 pt-4">
//                             <Button type="submit" className="flex-1">
//                                 Send Message
//                             </Button>
//                             <Button type="button" variant="outline" onClick={onClose}>
//                                 Cancel
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </Card>
//             {notification && (
//                 <div className={`fixed inset-0 flex items-center justify-center z-50 pointer-events-none`}>
//                     <div
//                         className={`px-6 py-4 rounded-md shadow-lg text-white text-center max-w-xs w-full transition-opacity duration-300
//                     ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
//                     >
//                         {notification.message}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ContactForm;

const ContactForm = ({ isOpen, onClose, role }: ContactFormProps) => {
    const [notification, setNotification] = useState<{
        message: string
        type: 'success' | 'error'
    } | null>(null);

    const showPopup = (message: string, type: 'success' | 'error') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        fetch('https://formspree.io/f/mwpbllae', {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' },
        })
            .then((res) => {
                if (res.ok) {
                    form.reset();        // 1) Clear the fields
                    onClose();           // 2) Hide the modal
                    showPopup(
                        "Thank you for reaching out! I'll be in touch.",
                        'success'
                    );
                } else {
                    showPopup('Submission failed. Please try again.', 'error');
                }
            })
            .catch(() => {
                showPopup('Submission failed. Please try again.', 'error');
            });
    };

    return (
        <>
            {/* Only render the modal if isOpen */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">Get in Touch</h3>
                                <Button variant="ghost" size="icon" onClick={onClose}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                Let's discuss how I can help you as a {role.toLowerCase()}.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id='name'
                                        name='name'
                                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                        placeholder="John Doe"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        placeholder='email@example.com'
                                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id='subject'
                                        name='subject'
                                        placeholder="Subject of your message"
                                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <Textarea
                                        className="min-h-[120px]"
                                        id='message'
                                        name='message'
                                        placeholder="Type your message here..."
                                        rows={4}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button type="submit" className="flex-1">
                                        Send Message
                                    </Button>
                                    <Button type="button" variant="outline" onClick={onClose}>
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            )}

            {/* Always render the notification container */}
            {notification && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <div
                        className={`px-6 py-4 rounded-md shadow-lg text-white text-center max-w-xs w-full transition-opacity duration-300
            ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                    >
                        {notification.message}
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactForm;