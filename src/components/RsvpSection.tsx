"use client";

import React, { useState } from 'react';
import { MessageCircle, CheckCircle, XCircle, User } from 'lucide-react';

interface GuestMessage {
    id: number;
    name: string;
    attendance: 'Hadir' | 'Tidak Hadir' | 'Masih Ragu';
    guests: number;
    message: string;
    time: string;
    avatarColor: string;
}

import toast from "react-hot-toast";

const RsvpSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        attendance: 'Hadir',
        guests: 1,
        message: ''
    });

    const [messages, setMessages] = useState<GuestMessage[]>([
        {
            id: 1,
            name: "Ninda",
            attendance: "Hadir",
            guests: 2,
            message: "MasyaAllah akhirnyaaa ya wak elmaakuu, lancar lancar sampai hari H ya wak menjadi keluarga yang sakinah mawadah dan warahmahh Aaaminn 🙏🙏",
            time: "10 bulan, 1 minggu yang lalu",
            avatarColor: "bg-blue-600"
        },
        {
            id: 2,
            name: "Yanti & Suami",
            attendance: "Tidak Hadir",
            guests: 0,
            message: "Selamat menempuh hidup baru kakak 😘. Semoga menjadi keluarga yang sakinah mawaddah warahmah. Smoga segera diberi momongan yang soleh dan solehah. Aamiin Yaa Allah. Maaf yaa kak, Sa gak bisa hadir di hari bahagia kakak.",
            time: "10 bulan, 1 minggu yang lalu",
            avatarColor: "bg-indigo-600"
        }
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate adding a message
        const newMessage: GuestMessage = {
            id: messages.length + 1,
            name: formData.name,
            attendance: formData.attendance as any,
            guests: formData.guests,
            message: formData.message,
            time: "Baru saja",
            avatarColor: "bg-teal-600"
        };
        setMessages([newMessage, ...messages]);
        setFormData({ name: '', attendance: 'Hadir', guests: 1, message: '' });
        toast.success("Ucapan berhasil dikirim!");
    };

    return (
        <section className="py-20 px-4 text-white font-sans">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="flex items-center justify-center gap-6 mb-7 ">
                    {/* Left Line */}
                    <div className="h-px w-58 md:w-32 bg-white"></div>

                    {/* Title Text */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <h2 className="leading-tight">
                            <span id="hero-section" className="text-4xl md:text-5xl text-white block">Join</span>
                            <span className="font-pinyon flex -mt-3 text-center items-center justify-center text-3xl md:text-6xl text-[#e9f5f5] tracking-wide">With Us</span>
                        </h2>
                    </div>
                </div>

                {/* Subtitle */}
                <p className="text-white/60 text-sm tracking-wider mb-8 text-center">Ucapan Selamat, Doa & Konfirmasi Kehadiran</p>

                {/* Comment Count Badge */}
                <div className="flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <MessageCircle size={18} className="text-white" />
                    <span className="font-medium text-sm">{messages.length} Ucapan</span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-4 mb-16 text-sm">
                    <input
                        type="text"
                        placeholder="Nama Tamu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-300/50 transition-colors"
                        required
                    />

                    <select
                        value={formData.attendance}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-orange-300/50 appearance-none cursor-pointer transition-colors"
                    >
                        <option value="Hadir" className="bg-gray-900">Hadir</option>
                        <option value="Tidak Hadir" className="bg-gray-900">Tidak Hadir</option>
                        <option value="Masih Ragu" className="bg-gray-900">Masih Ragu</option>
                    </select>

                    <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-orange-300/50 appearance-none cursor-pointer transition-colors"
                    >
                        <option value={1} className="bg-gray-900">1 Tamu</option>
                        <option value={2} className="bg-gray-900">2 Tamu</option>
                        <option value={3} className="bg-gray-900">3 Tamu</option>
                        <option value={4} className="bg-gray-900">4 Tamu</option>
                    </select>

                    <div className="relative">
                        <textarea
                            placeholder="Tulis Ucapan"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 min-h-[150px] focus:outline-none focus:border-orange-300/50 resize-none transition-colors"
                            maxLength={500}
                            required
                        ></textarea>
                        <span className="absolute bottom-4 right-4 text-xs text-white/40">
                            {500 - formData.message.length}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-100 hover:bg-orange-400/50 text-black font-bold py-2 px-5 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
                    >
                        Kirim Ucapan
                    </button>
                </form>

                {/* Message List */}
                <div className="w-full space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className="flex gap-4 p-1 border-b border-white/10 last:border-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Avatar */}
                            <div className={`w-10 h-10 rounded-full ${msg.avatarColor} flex items-center justify-center shrink-0 text-sm font-bold shadow-md`}>
                                {msg.name.slice(0, 2).toUpperCase()}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-lg">{msg.name}</h4>
                                    {msg.attendance === 'Hadir' ? (
                                        <CheckCircle size={16} className="text-green-400" />
                                    ) : msg.attendance === 'Tidak Hadir' ? (
                                        <XCircle size={16} className="text-red-400" />
                                    ) : (
                                        <span className="text-xs bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded-full">Ragu</span>
                                    )}
                                </div>

                                <p className="text-slate-200 text-sm leading-relaxed mb-2">
                                    {msg.message}
                                </p>

                                <span className="text-xs text-slate-400 italic">
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RsvpSection;
