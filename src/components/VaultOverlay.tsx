"use client";

import { X, Send, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhrasePair {
  en: string;
  id: string;
  signIcon: string;
}

interface VaultOverlayProps {
  theme: "daily" | "transport" | "financial";
  onClose: () => void;
  onSendText: (textEn: string, textId: string) => void;
  onSendVoice: (text: string) => void;
  language: "en" | "id";
}

const vaultPhrases = {
  daily: [
    { en: "Good morning, I hope you slept well", id: "Selamat pagi, semoga tidur nyenyak", signIcon: "eating" },
    { en: "I am ready to start my day", id: "Saya siap memulai hari saya", signIcon: "eating" },
    { en: "Can we review today's schedule", id: "Bisakah kita tinjau jadwal hari ini", signIcon: "eating" },
    { en: "What activities are planned for today", id: "Kegiatan apa yang direncanakan hari ini", signIcon: "eating" },
    { en: "I would like to check my daily tasks", id: "Saya ingin memeriksa tugas harian saya", signIcon: "eating" },
    { en: "Can you help me organize my routine", id: "Bisakah Anda membantu saya mengatur rutinitas", signIcon: "eating" },
    { en: "I need assistance with my morning routine", id: "Saya butuh bantuan dengan rutinitas pagi", signIcon: "eating" },
    { en: "What time is breakfast", id: "Jam berapa sarapan", signIcon: "eating" },
    { en: "When should I take my medication", id: "Kapan saya harus minum obat", signIcon: "eating" },
    { en: "Can we go for a walk today", id: "Bisakah kita jalan-jalan hari ini", signIcon: "eating" },
    { en: "I would like to do some exercise", id: "Saya ingin berolahraga", signIcon: "eating" },
    { en: "What's the weather like today", id: "Bagaimana cuaca hari ini", signIcon: "eating" },
    { en: "I need help getting dressed", id: "Saya butuh bantuan berpakaian", signIcon: "clothing" },
    { en: "Can you assist me with hygiene", id: "Bisakah Anda membantu saya dengan kebersihan", signIcon: "eating" },
    { en: "I would like to take a shower", id: "Saya ingin mandi", signIcon: "drinking" },
    { en: "Can we read a book together", id: "Bisakah kita membaca buku bersama", signIcon: "eating" },
    { en: "I want to watch my favorite show", id: "Saya ingin menonton acara favorit saya", signIcon: "eating" },
    { en: "Can we listen to music", id: "Bisakah kita mendengarkan musik", signIcon: "eating" },
    { en: "I would like to do arts and crafts", id: "Saya ingin melakukan seni dan kerajinan", signIcon: "eating" },
    { en: "Can we play a game", id: "Bisakah kita bermain game", signIcon: "eating" },
    { en: "I need a break", id: "Saya butuh istirahat", signIcon: "eating" },
    { en: "I'm feeling tired", id: "Saya merasa lelah", signIcon: "eating" },
    { en: "Can I rest for a while", id: "Bisakah saya istirahat sebentar", signIcon: "eating" },
    { en: "What time is lunch", id: "Jam berapa makan siang", signIcon: "eating" },
    { en: "I'm hungry", id: "Saya lapar", signIcon: "eating" },
    { en: "Can I have a snack", id: "Bisakah saya makan camilan", signIcon: "eating" },
    { en: "I'm thirsty", id: "Saya haus", signIcon: "drinking" },
    { en: "Can I have some juice", id: "Bisakah saya minta jus", signIcon: "drinking" },
    { en: "I would like to call my family", id: "Saya ingin menelepon keluarga saya", signIcon: "eating" },
    { en: "Can we video chat with friends", id: "Bisakah kita video call dengan teman", signIcon: "eating" },
    { en: "I want to see my loved ones", id: "Saya ingin bertemu orang terkasih", signIcon: "eating" },
    { en: "What time is dinner", id: "Jam berapa makan malam", signIcon: "eating" },
    { en: "Can we prepare for bedtime", id: "Bisakah kita bersiap tidur", signIcon: "eating" },
    { en: "I need help brushing my teeth", id: "Saya butuh bantuan sikat gigi", signIcon: "eating" },
    { en: "Can you read me a bedtime story", id: "Bisakah Anda bacakan cerita pengantar tidur", signIcon: "eating" },
    { en: "I'm ready for bed", id: "Saya siap tidur", signIcon: "eating" },
    { en: "Goodnight, see you tomorrow", id: "Selamat malam, sampai jumpa besok", signIcon: "eating" },
    { en: "I had a good day today", id: "Saya punya hari yang baik hari ini", signIcon: "eating" },
    { en: "Thank you for your help", id: "Terima kasih atas bantuan Anda", signIcon: "eating" },
    { en: "Can we talk about tomorrow's plans", id: "Bisakah kita bicara tentang rencana besok", signIcon: "eating" },
    { en: "I feel happy today", id: "Saya merasa bahagia hari ini", signIcon: "eating" },
    { en: "I'm having a difficult day", id: "Saya mengalami hari yang sulit", signIcon: "eating" },
    { en: "Can we work on a puzzle together", id: "Bisakah kita mengerjakan puzzle bersama", signIcon: "eating" },
    { en: "I would like to go outside", id: "Saya ingin pergi keluar", signIcon: "eating" },
    { en: "Can we spend time in the garden", id: "Bisakah kita menghabiskan waktu di taman", signIcon: "eating" },
    { en: "I want to help with chores", id: "Saya ingin membantu pekerjaan rumah", signIcon: "eating" },
    { en: "Can I water the plants", id: "Bisakah saya menyiram tanaman", signIcon: "drinking" },
    { en: "I would like to cook something", id: "Saya ingin memasak sesuatu", signIcon: "eating" },
    { en: "Can we bake together", id: "Bisakah kita membuat kue bersama", signIcon: "eating" },
    { en: "I need some quiet time", id: "Saya butuh waktu tenang", signIcon: "eating" },
  ],
  transport: [
    { en: "I need transportation to the doctor", id: "Saya butuh transportasi ke dokter", signIcon: "driving" },
    { en: "Can you arrange a ride for me", id: "Bisakah Anda mengatur tumpangan untuk saya", signIcon: "driving" },
    { en: "What time will the car arrive", id: "Jam berapa mobil akan tiba", signIcon: "driving" },
    { en: "I have an appointment at the hospital", id: "Saya punya janji di rumah sakit", signIcon: "driving" },
    { en: "Can we go to the therapy center", id: "Bisakah kita pergi ke pusat terapi", signIcon: "driving" },
    { en: "I need to visit the pharmacy", id: "Saya perlu mengunjungi apotek", signIcon: "driving" },
    { en: "Can someone drive me to the store", id: "Bisakah seseorang mengantarkan saya ke toko", signIcon: "driving" },
    { en: "I would like to go to the park", id: "Saya ingin pergi ke taman", signIcon: "driving" },
    { en: "Can we schedule a trip to the mall", id: "Bisakah kita jadwalkan perjalanan ke mal", signIcon: "driving" },
    { en: "I need transportation for my classes", id: "Saya butuh transportasi untuk kelas saya", signIcon: "driving" },
    { en: "What time does the bus arrive", id: "Jam berapa bus tiba", signIcon: "driving" },
    { en: "Can you help me plan my route", id: "Bisakah Anda membantu saya merencanakan rute", signIcon: "driving" },
    { en: "I need directions to the community center", id: "Saya butuh petunjuk arah ke pusat komunitas", signIcon: "driving" },
    { en: "Can we use the accessible van today", id: "Bisakah kita gunakan van aksesibel hari ini", signIcon: "driving" },
    { en: "I would like to visit my friend", id: "Saya ingin mengunjungi teman saya", signIcon: "driving" },
    { en: "Can someone pick me up from school", id: "Bisakah seseorang menjemput saya dari sekolah", signIcon: "driving" },
    { en: "I need a ride home", id: "Saya butuh tumpangan pulang", signIcon: "driving" },
    { en: "Can we go to the library", id: "Bisakah kita pergi ke perpustakaan", signIcon: "driving" },
    { en: "I have a job interview tomorrow", id: "Saya punya wawancara kerja besok", signIcon: "driving" },
    { en: "Can you arrange transportation for the weekend", id: "Bisakah Anda atur transportasi untuk akhir pekan", signIcon: "driving" },
    { en: "I need to attend a social event", id: "Saya perlu menghadiri acara sosial", signIcon: "driving" },
    { en: "Can we go to the cinema", id: "Bisakah kita pergi ke bioskop", signIcon: "driving" },
    { en: "I would like to visit the museum", id: "Saya ingin mengunjungi museum", signIcon: "driving" },
    { en: "Can someone drive me to the church", id: "Bisakah seseorang mengantarkan saya ke gereja", signIcon: "driving" },
    { en: "I need transportation to the workshop", id: "Saya butuh transportasi ke lokakarya", signIcon: "driving" },
    { en: "Can we go on a field trip", id: "Bisakah kita pergi study tour", signIcon: "driving" },
    { en: "I want to visit the zoo", id: "Saya ingin mengunjungi kebun binatang", signIcon: "driving" },
    { en: "Can you take me to the beach", id: "Bisakah Anda membawa saya ke pantai", signIcon: "driving" },
    { en: "I need a ride to the recreation center", id: "Saya butuh tumpangan ke pusat rekreasi", signIcon: "driving" },
    { en: "Can we go to the restaurant", id: "Bisakah kita pergi ke restoran", signIcon: "driving" },
    { en: "I would like to attend the sports game", id: "Saya ingin menghadiri pertandingan olahraga", signIcon: "driving" },
    { en: "Can someone help me get to the concert", id: "Bisakah seseorang membantu saya ke konser", signIcon: "driving" },
    { en: "I need transportation for my volunteer work", id: "Saya butuh transportasi untuk kerja sukarelawan", signIcon: "driving" },
    { en: "Can we visit the community garden", id: "Bisakah kita kunjungi taman komunitas", signIcon: "driving" },
    { en: "I want to go to the farmers market", id: "Saya ingin pergi ke pasar petani", signIcon: "driving" },
    { en: "Can you arrange a ride to the gym", id: "Bisakah Anda atur tumpangan ke gym", signIcon: "driving" },
    { en: "I need to get to my swimming class", id: "Saya perlu sampai ke kelas renang saya", signIcon: "driving" },
    { en: "Can we go to the art gallery", id: "Bisakah kita pergi ke galeri seni", signIcon: "driving" },
    { en: "I would like to attend the music class", id: "Saya ingin menghadiri kelas musik", signIcon: "driving" },
    { en: "Can someone drive me to the dance studio", id: "Bisakah seseorang mengantarkan saya ke studio dansa", signIcon: "driving" },
    { en: "I need transportation to the career fair", id: "Saya butuh transportasi ke pameran karir", signIcon: "driving" },
    { en: "Can we go to the support group meeting", id: "Bisakah kita pergi ke pertemuan kelompok dukungan", signIcon: "driving" },
    { en: "I want to visit the employment center", id: "Saya ingin mengunjungi pusat ketenagakerjaan", signIcon: "driving" },
    { en: "Can you help me get to the vocational training", id: "Bisakah Anda membantu saya ke pelatihan kejuruan", signIcon: "driving" },
    { en: "I need a ride to my counseling appointment", id: "Saya butuh tumpangan ke janji konseling saya", signIcon: "driving" },
    { en: "Can we go to the advocacy office", id: "Bisakah kita pergi ke kantor advokasi", signIcon: "driving" },
    { en: "I would like to attend the conference", id: "Saya ingin menghadiri konferensi", signIcon: "driving" },
    { en: "Can someone take me to the legal aid center", id: "Bisakah seseorang membawa saya ke pusat bantuan hukum", signIcon: "driving" },
    { en: "I need transportation for the family gathering", id: "Saya butuh transportasi untuk pertemuan keluarga", signIcon: "driving" },
    { en: "Can we plan a trip to see relatives", id: "Bisakah kita rencanakan perjalanan melihat saudara", signIcon: "driving" },
  ],
  financial: [
    { en: "I need help managing my budget", id: "Saya butuh bantuan mengelola anggaran saya", signIcon: "money" },
    { en: "Can we review my monthly expenses", id: "Bisakah kita tinjau pengeluaran bulanan saya", signIcon: "money" },
    { en: "I would like to check my account balance", id: "Saya ingin cek saldo rekening saya", signIcon: "money" },
    { en: "Can you help me pay my bills", id: "Bisakah Anda membantu saya bayar tagihan", signIcon: "money" },
    { en: "I need assistance with my banking", id: "Saya butuh bantuan dengan perbankan saya", signIcon: "money" },
    { en: "Can we set up a savings plan", id: "Bisakah kita buat rencana tabungan", signIcon: "money" },
    { en: "I want to understand my financial statement", id: "Saya ingin memahami laporan keuangan saya", signIcon: "money" },
    { en: "Can you explain this transaction", id: "Bisakah Anda jelaskan transaksi ini", signIcon: "money" },
    { en: "I need to make a payment", id: "Saya perlu melakukan pembayaran", signIcon: "money" },
    { en: "Can we go to the bank", id: "Bisakah kita pergi ke bank", signIcon: "money" },
    { en: "I would like to deposit money", id: "Saya ingin menyetor uang", signIcon: "money" },
    { en: "Can you help me withdraw cash", id: "Bisakah Anda membantu saya tarik tunai", signIcon: "money" },
    { en: "I need to apply for financial assistance", id: "Saya perlu mengajukan bantuan keuangan", signIcon: "money" },
    { en: "Can we discuss my disability benefits", id: "Bisakah kita bahas tunjangan disabilitas saya", signIcon: "money" },
    { en: "I want to check my benefits status", id: "Saya ingin cek status tunjangan saya", signIcon: "money" },
    { en: "Can you help me file my taxes", id: "Bisakah Anda membantu saya ajukan pajak", signIcon: "money" },
    { en: "I need information about my insurance", id: "Saya butuh informasi tentang asuransi saya", signIcon: "money" },
    { en: "Can we review my healthcare costs", id: "Bisakah kita tinjau biaya kesehatan saya", signIcon: "money" },
    { en: "I would like to understand my paycheck", id: "Saya ingin memahami gaji saya", signIcon: "money" },
    { en: "Can you help me create a spending plan", id: "Bisakah Anda membantu saya buat rencana pengeluaran", signIcon: "money" },
    { en: "I need to track my income", id: "Saya perlu lacak pendapatan saya", signIcon: "money" },
    { en: "Can we set financial goals", id: "Bisakah kita tetapkan tujuan keuangan", signIcon: "money" },
    { en: "I want to learn about money management", id: "Saya ingin belajar tentang manajemen uang", signIcon: "money" },
    { en: "Can you teach me to use online banking", id: "Bisakah Anda ajarkan saya gunakan perbankan online", signIcon: "money" },
    { en: "I need help with my debit card", id: "Saya butuh bantuan dengan kartu debit saya", signIcon: "money" },
    { en: "Can we check if my payment went through", id: "Bisakah kita cek apakah pembayaran saya berhasil", signIcon: "money" },
    { en: "I would like to cancel a subscription", id: "Saya ingin membatalkan langganan", signIcon: "money" },
    { en: "Can you help me dispute a charge", id: "Bisakah Anda membantu saya sengketakan tagihan", signIcon: "money" },
    { en: "I need to update my payment information", id: "Saya perlu perbarui informasi pembayaran", signIcon: "money" },
    { en: "Can we set up automatic payments", id: "Bisakah kita atur pembayaran otomatis", signIcon: "money" },
    { en: "I want to avoid overdraft fees", id: "Saya ingin hindari biaya cerukan", signIcon: "money" },
    { en: "Can you explain this fee", id: "Bisakah Anda jelaskan biaya ini", signIcon: "money" },
    { en: "I need help understanding interest rates", id: "Saya butuh bantuan memahami suku bunga", signIcon: "money" },
    { en: "Can we review my credit report", id: "Bisakah kita tinjau laporan kredit saya", signIcon: "money" },
    { en: "I would like to improve my credit score", id: "Saya ingin tingkatkan skor kredit saya", signIcon: "money" },
    { en: "Can you help me apply for a loan", id: "Bisakah Anda membantu saya ajukan pinjaman", signIcon: "money" },
    { en: "I need information about ABLE accounts", id: "Saya butuh informasi tentang akun ABLE", signIcon: "money" },
    { en: "Can we discuss special needs trusts", id: "Bisakah kita bahas trust kebutuhan khusus", signIcon: "money" },
    { en: "I want to plan for my financial future", id: "Saya ingin rencanakan masa depan keuangan saya", signIcon: "money" },
    { en: "Can you help me understand guardianship finances", id: "Bisakah Anda membantu saya pahami keuangan perwalian", signIcon: "money" },
    { en: "I need assistance with representative payee duties", id: "Saya butuh bantuan dengan tugas penerima pembayaran", signIcon: "money" },
    { en: "Can we create an emergency fund", id: "Bisakah kita buat dana darurat", signIcon: "money" },
    { en: "I would like to save for a goal", id: "Saya ingin menabung untuk tujuan", signIcon: "money" },
    { en: "Can you help me budget for vacation", id: "Bisakah Anda membantu saya anggarkan liburan", signIcon: "money" },
    { en: "I need to plan for holiday expenses", id: "Saya perlu rencanakan pengeluaran hari libur", signIcon: "money" },
    { en: "Can we discuss my work incentives", id: "Bisakah kita bahas insentif kerja saya", signIcon: "money" },
    { en: "I want to understand how working affects my benefits", id: "Saya ingin pahami bagaimana bekerja mempengaruhi tunjangan", signIcon: "money" },
    { en: "Can you help me report my income", id: "Bisakah Anda membantu saya laporkan pendapatan", signIcon: "money" },
    { en: "I need to protect my financial information", id: "Saya perlu lindungi informasi keuangan saya", signIcon: "money" },
    { en: "Can we review my financial documents", id: "Bisakah kita tinjau dokumen keuangan saya", signIcon: "money" },
  ],
};

const themeColors = {
  daily: { border: "border-navigation", bg: "bg-slate-50", text: "text-navigation" },
  transport: { border: "border-amber-400", bg: "bg-amber-50", text: "text-amber-600" },
  financial: { border: "border-purple-600", bg: "bg-purple-50", text: "text-purple-700" },
};

const themeTitles = {
  daily: { en: "Daily Life Communication Vault", id: "Ruang Komunikasi Kehidupan Sehari-hari" },
  transport: { en: "Transport Communication Vault", id: "Ruang Komunikasi Transportasi" },
  financial: { en: "Financial Communication Vault", id: "Ruang Komunikasi Keuangan" },
};

// Simple sign icon component
const SimpleSignIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="#0B3C5D" strokeWidth="3">
    <circle cx="50" cy="40" r="15" />
    <path d="M 35 55 L 35 75 M 65 55 L 65 75" strokeLinecap="round" />
    <path d="M 40 65 L 45 65 M 55 65 L 60 65" strokeLinecap="round" />
  </svg>
);

export function VaultOverlay({ theme, onClose, onSendText, onSendVoice, language }: VaultOverlayProps) {
  const phrases = vaultPhrases[theme];
  const colors = themeColors[theme];
  const title = themeTitles[theme];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col border-4 border-accent/20">
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b-4 ${colors.border} ${colors.bg}`}>
          <h2 className={`text-2xl font-bold font-heading ${colors.text}`}>
            {title[language]}
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="hover:bg-white/50"
          >
            <X className="w-6 h-6" />
            <span className="ml-2 font-semibold">Close Vault</span>
          </Button>
        </div>

        {/* Phrase Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phrases.map((phrase, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg border-2 ${colors.border} p-4 hover:shadow-lg transition-all duration-200 flex flex-col gap-3`}
              >
                {/* Sign Language Icon */}
                <div className="flex items-center justify-center">
                  <SimpleSignIcon />
                </div>

                {/* Phrase Text */}
                <p className="text-sm font-semibold text-center text-foreground leading-snug min-h-[3rem] flex items-center justify-center">
                  {language === "en" ? phrase.en : phrase.id}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => onSendText(phrase.en, phrase.id)}
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs font-bold border-accent/40 hover:bg-accent/10"
                  >
                    <Send className="w-3 h-3 mr-1" />
                    📱 Send Text
                  </Button>
                  <Button
                    onClick={() => onSendVoice(phrase.en)}
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs font-bold border-accent/40 hover:bg-accent/10"
                  >
                    <Volume2 className="w-3 h-3 mr-1" />
                    🔊 Voice
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}