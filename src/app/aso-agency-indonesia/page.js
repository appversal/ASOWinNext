"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    TrendingUp,
    Star,
    Target,
    Zap,
    CheckCircle,
    ArrowRight,
    BarChart3,
    Search,
    Smartphone,
    Clock,
    Rocket,
    Shield,
    Award,
    Users,
    Mail,
    ChevronRight
} from "lucide-react";
import {
    SiSpotify,
    SiAdobe,
    SiNordvpn,
    SiDropbox,
    SiAsana,
    SiOpera,
    SiVimeo,
    SiGoogleplay,
    SiAppstore
} from "react-icons/si";
import Lottie from "lottie-react";
import { useState } from "react";
import mainSceneAnimation from "../../../public/Main Scene.json";

function ContactForm({ variant = "full" }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        appLive: "",
        message: "",
        consent: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Prepare form data with proper field names for Formspree
            const submissionData = {
                "First Name": formData.firstName || "",
                "Last Name": formData.lastName || "",
                "Email": formData.email,
                "Job Title": formData.jobTitle || "",
                "App Live Status": formData.appLive || "",
                "Message": formData.message || "",
                "Consent": formData.consent ? "Yes" : "No",
                "Form Type": variant, // Identifies which form was submitted
                "Submission Date": new Date().toISOString(),
            };

            const response = await fetch("https://formspree.io/f/xgokpzgq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    jobTitle: "",
                    appLive: "",
                    message: "",
                    consent: false,
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (variant === "hero") {
        return (
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            name="firstName"
                            placeholder="Nama depan *"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="bg-card border-border h-12"
                            data-testid="input-firstname-hero"
                        />
                        <Input
                            name="lastName"
                            placeholder="Nama belakang *"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="bg-card border-border h-12"
                            data-testid="input-lastname-hero"
                        />
                    </div>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email kerja *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-card border-border h-12"
                        data-testid="input-email-hero"
                        required
                    />
                    <Button type="submit" size="lg" className="h-12 font-semibold" data-testid="button-cta-hero" disabled={isSubmitting}>
                        {isSubmitting ? "Mengirim..." : "Dapatkan Audit ASO Gratis"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    {submitStatus === "success" && (
                        <p className="text-sm text-primary">✓ Terima kasih! Kami akan menghubungi Anda dalam 24 jam.</p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-sm text-destructive">✗ Terjadi kesalahan. Silakan coba lagi.</p>
                    )}
                </div>
            </form>
        );
    }
    if (variant === "compact") {
        return (
            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Masukkan email kerja Anda"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="flex-1 bg-card border-border h-12"
                            data-testid="input-email-compact"
                            required
                        />
                        <Button type="submit" size="lg" className="h-12 px-8 font-semibold" data-testid="button-cta-compact" disabled={isSubmitting}>
                            {isSubmitting ? "Mengirim..." : "Dapatkan Audit Gratis"}
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                    {submitStatus === "success" && (
                        <p className="text-sm text-primary">✓ Terima kasih! Kami akan menghubungi Anda dalam 24 jam.</p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-sm text-destructive">✗ Terjadi kesalahan. Silakan coba lagi.</p>
                    )}
                </div>
            </form>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm text-foreground">Nama Depan<span className="text-primary">*</span></Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-background border-border h-11"
                        data-testid="input-firstname"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm text-foreground">Nama Belakang<span className="text-primary">*</span></Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-background border-border h-11"
                        data-testid="input-lastname"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">Email Kantor<span className="text-primary">*</span></Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border h-11"
                    data-testid="input-email"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-sm text-foreground">Jabatan<span className="text-primary">*</span></Label>
                <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="bg-background border-border h-11"
                    data-testid="input-jobtitle"
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm text-foreground">Apakah Anda memiliki aplikasi yang sedang tayang di App Store?<span className="text-primary">*</span></Label>
                <Select value={formData.appLive} onValueChange={(value) => setFormData({ ...formData, appLive: value })}>
                    <SelectTrigger className="bg-background border-border h-11" data-testid="select-applive">
                        <SelectValue placeholder="Silakan Pilih" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 text-gray-900 z-50">
                        <SelectItem value="yes" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Ya, aplikasi saya sudah live</SelectItem>
                        <SelectItem value="soon" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Akan segera launching</SelectItem>
                        <SelectItem value="planning" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Masih dalam tahap perencanaan</SelectItem>
                        <SelectItem value="no" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Tidak, saya belum punya aplikasi</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-foreground">Bagaimana kami bisa membantu? (Opsional)</Label>
                <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border min-h-[100px]"
                    data-testid="textarea-message"
                />
            </div>
            <div className="flex items-start gap-3 pt-2">
                <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked })}
                    data-testid="checkbox-consent"
                    required
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Saya setuju untuk dihubungi oleh ASOWin, dan saya menerima ketentuan pemrosesan data yang tercantum dalam <a href="#" className="text-primary hover:underline">Kebijakan Privasi</a>.<span className="text-primary">*</span>
                </Label>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 font-semibold mt-4" data-testid="button-submit" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Mari Terhubung!"}
            </Button>
            {submitStatus === "success" && (
                <p className="text-sm text-primary text-center">✓ Terima kasih! Kami akan menghubungi Anda dalam 24 jam.</p>
            )}
            {submitStatus === "error" && (
                <p className="text-sm text-destructive text-center">✗ Terjadi kesalahan. Silakan coba lagi.</p>
            )}
        </form>
    );
}

export default function AsoAgencyPage() {
    const metrics = [
        { value: "37%", label: "Rata-rata tingkat konversi", sublabel: "dari seluruh klien." },
        { value: "136", label: "Kata kunci yang berhasil", sublabel: "menempati peringkat pertama." },
        { value: "10M+", label: "Total unduhan yang telah", sublabel: "dihasilkan untuk seluruh klien." },
        { value: "90", label: "Target waktu pencapaian", sublabel: "hasil yang dijamin." },
    ];

    const services = [
        {
            icon: Search,
            title: "Layanan Lengkap dari ASO",
            description: "Tingkatkan visibilitas dan unduhan aplikasi Anda dengan layanan ASO komprehensif kami, mulai dari optimasi metadata hingga penyempurnaan tampilan di App Store.",
        },
        {
            icon: Target,
            title: "Riset Keyword & Perangkat",
            description: "Kami mengidentifikasi keyword yang paling relevan dan berkinerja tinggi agar aplikasi Anda muncul di pencarian teratas Play Store dan App Store.",
        },
        {
            icon: BarChart3,
            title: "Layanan Desain & Pengujian A/B",
            description: "Berikan kesan pertama yang menarik dengan screenshot, video, dan ikon aplikasi yang memukau. Kami melakukan pengujian A/B yang ketat untuk menemukan visual yang menghasilkan konversi.",
        },
        {
            icon: Star,
            title: "Manajemen Reputasi Aplikasi",
            description: "Jaga citra positif aplikasi dengan layanan manajemen reputasi kami. Kami mengelola ulasan, peringkat, dan menanggapi masukan pengguna secara profesional.",
        },
        {
            icon: Rocket,
            title: "Akuisisi Pengguna Berbayar (UA)",
            description: "Pacu pertumbuhan Anda dengan kampanye akuisisi pengguna yang tertarget melalui Apple Search Ads dan kanal berbayar lainnya untuk memaksimalkan ROI.",
        },
        {
            icon: Smartphone,
            title: "Optimasi Aset Kreatif",
            description: "Screenshot, ikon, dan video promosi yang telah diuji A/B untuk mengubah pengunjung menjadi pengguna setia berdasarkan keputusan kreatif yang didorong oleh data.",
        },
    ];

    const clientLogos = [
        { name: "Spotify", icon: SiSpotify },
        { name: "Adobe", icon: SiAdobe },
        { name: "NordVPN", icon: SiNordvpn },
        { name: "Dropbox", icon: SiDropbox },
        { name: "Asana", icon: SiAsana },
        { name: "Opera", icon: SiOpera },
        { name: "Vimeo", icon: SiVimeo },
    ];

    const moreClients = [
        "Headspace", "KAYAK", "Skyscanner", "Fishbrain", "Clue", "InfoJobs", "Wargaming", "Burner"
    ];

    const testimonials = [
        {
            quote: "Kami sangat menyukai pekerjaan yang dilakukan tim ASOWin untuk Aplikasi kami setiap hari. Sangat puas dan kami sangat menghargai dedikasi serta layanan berkualitas tinggi yang ditawarkan.",
            author: "Head of Growth",
            company: "Aplikasi E-commerce Fortune 500",
            rating: 5,
        },
        {
            quote: "Aplikasi kami naik dari halaman 3 ke 5 besar untuk kata kunci utama kami. Unduhan meningkat 280% hanya dalam 60 hari. ROI-nya luar biasa.",
            author: "Direktur Produk",
            company: "Platform Fintech Terkemuka",
            rating: 5,
        },
        {
            quote: "Tim ini sangat memahami ASO Play Store dan optimasi App Store secara mendalam. Benar-benar ahli yang memberikan hasil yang terukur.",
            author: "VP Pemasaran",
            company: "Aplikasi Kesehatan & Kebugaran Teratas",
            rating: 5,
        },
    ];

    const benefits = [
        "Tanpa kontrak jangka panjang",
        "Audit ASO komprehensif gratis",
        "Bayar bulanan, dapat dibatalkan kapan saja",
        "Account Manager khusus",
        "Laporan kinerja mingguan",
        "Dukungan Slack & Email 24/7",
    ];

    return (
        <div className="min-h-screen bg-background overflow-hidden aso-agency-page">
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(142 76% 45%) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-16">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <Image
                                src="/ASOWin.png"
                                alt="ASOWin Logo"
                                width={118}
                                height={38}
                                className="w-[100px] md:w-[118px] h-auto"
                            />
                        </Link>
                        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1">
                            <Award className="w-3 h-3 mr-1" />
                            Dipercaya oleh Aplikasi Top Indonesia
                        </Badge>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
                                <div className="flex items-center gap-2">
                                    <SiGoogleplay className="w-4 h-4 text-primary" />
                                    <SiAppstore className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">Ahli Play Store & App Store</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-main-headline">
                                <span className="text-foreground">Agensi Optimasi App Store </span>
                                <span className="gradient-text">#1</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl" data-testid="text-subheadline">
                                Peringkat Lebih Tinggi di Play Store & App Store dalam 90 Hari. Terjamin.
                            </p>

                            {/* Hero Form */}
                            <div className="mb-8">
                                <ContactForm variant="hero" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Audit gratis dikirim dalam 24 jam. Tidak perlu kartu kredit.
                            </p>
                        </div>

                        {/* Right Column - Animation */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="relative w-full max-w-lg">
                                <Lottie
                                    animationData={mainSceneAnimation}
                                    loop={true}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>                </div>
                </div>
            </section>

            {/* Client Logos - First Row */}
            <section className="py-12 border-y border-border bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
                        DIPERCAYA OLEH PERUSAHAAN TERKEMUKA DI SELURUH DUNIA
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {clientLogos.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
                                data-testid={`client-logo-${index}`}
                            >
                                <client.icon className="w-6 h-6" />
                                <span className="text-lg font-semibold">{client.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        {moreClients.map((client, index) => (
                            <span
                                key={index}
                                className="text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Hasil yang Berbicara</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Pencapaian luar biasa di berbagai negara
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, index) => (
                            <Card key={index} className="p-6 text-center bg-card/50 border-border hover-elevate" data-testid={`metric-${index}`}>
                                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                                <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Form Section */}
            <section className="py-16 bg-primary/5 border-y border-primary/20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Apakah siap untuk meningkatkan peringkat aplikasi Anda?</h3>
                    <p className="text-muted-foreground mb-6">Dapatkan audit ASO gratis dalam 24 jam</p>
                    <ContactForm variant="compact" />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Layanan ASO Kami</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-services-heading">
                            Layanan Optimasi App Store Menyeluruh
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Segala hal yang Anda butuhkan untuk menguasai peringkat App Store dan mendorong unduhan secara organik
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="p-6 bg-card/50 border-border hover-elevate group" data-testid={`service-${index}`}>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-card/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Kisah Sukses Klien</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Apa Kata Klien Kami
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-6 bg-card border-border" data-testid={`testimonial-${index}`}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-foreground mb-6 text-sm leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="text-sm">
                                    <span className="font-medium text-foreground">{testimonial.author}</span>
                                    <br />
                                    <span className="text-muted-foreground">{testimonial.company}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="secondary" className="mb-4">Mengapa ASOWin?</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Agensi ASO yang Memberikan <span className="gradient-text">Hasil Nyata</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Kami bukan sekadar agensi pemeringkatan aplikasi biasa. Kami menggabungkan keahlian mendalam ASO Play Store dengan strategi peringkat kata kunci App Store untuk memaksimalkan pertumbuhan organik aplikasi Anda.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3" data-testid={`benefit-${index}`}>
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <ContactForm variant="compact" />
                        </div>

                        <div className="hidden lg:flex items-center justify-center">
                            <div className="w-full max-w-md">
                                <Lottie animationData={mainSceneAnimation} loop={true} className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-card/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Cara Kerja Kami</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Bagaimana Optimasi App Store Kami Bekerja
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pendekatan berbasis data yang terbukti untuk meningkatkan peringkat aplikasi Anda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Audit Gratis", desc: "Analisis ASO lengkap untuk aplikasi Anda.", icon: Search },
                            { step: "02", title: "Strategi", desc: "Rencana keyword khusus dan peringkat.", icon: Target },
                            { step: "03", title: "Eksekusi", desc: "Optimasi tampilan aplikasi dan aset kreatif.", icon: Zap },
                            { step: "04", title: "Pertumbuhan", desc: "Pantau peringkat dan lakukan iterasi berkelanjutan.", icon: TrendingUp },
                        ].map((item, index) => (
                            <div key={index} className="text-center" data-testid={`process-${index}`}>
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 relative">
                                    <item.icon className="w-7 h-7 text-primary" />
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Contact Form Section */}
            <section className="py-20" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left - Info */}
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">HUBUNGI KAMI</p>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                                Ada yang bisa<br />kami bantu?
                            </h2>

                            {/* Client Logos Grid */}
                            <div className="grid grid-cols-4 gap-4 mt-12">
                                {clientLogos.slice(0, 4).map((client, index) => (
                                    <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-card/50 border border-border">
                                        <client.icon className="w-6 h-6 text-muted-foreground/60" />
                                    </div>
                                ))}
                                {clientLogos.slice(4).map((client, index) => (
                                    <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-card/50 border border-border">
                                        <client.icon className="w-6 h-6 text-muted-foreground/60" />
                                    </div>
                                ))}
                                {moreClients.slice(0, 1).map((client, index) => (
                                    <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-card/50 border border-border col-span-2">
                                        <span className="text-xs font-medium text-muted-foreground">{client}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Form */}
                        <Card className="p-8 bg-card border-border">
                            <ContactForm variant="full" />
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '30px 30px'
                    }} />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                        <Zap className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white">Slot Terbatas Bulan Ini</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                        Siap untuk Peringkat Lebih Tinggi?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Dapatkan audit ASO komprehensif dan temukan cara meningkatkan peringkat Anda.
                    </p>

                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                placeholder="Masukkan email kerja Anda"
                                className="flex-1 h-12 bg-white border-white text-foreground"
                                data-testid="input-email-final"
                            />
                            <Button
                                size="lg"
                                className="h-12 px-8 font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                data-testid="button-cta-final"
                            >
                                Dapatkan Audit Gratis
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/70 text-sm">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Tanpa kontrak</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Manajer khusus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Hasil dalam 90 hari</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <Image
                                    src="/ASOWin.png"
                                    alt="ASOWin Logo"
                                    width={118}
                                    height={38}
                                    className="w-[100px] md:w-[118px] h-auto"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                            Agensi Optimasi App Store #1 untuk Aplikasi yang Berfokus pada Pertumbuhan
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="mailto:hello@asowin.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>hello@asowin.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
