"use client";

import Link from "next/link";
import { PROOF } from "../../components/proofFacts";
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
    SiGoogleplay,
    SiAppstore
} from "react-icons/si";
import { useState } from "react";
import { trackLinkedInConversion } from "@/lib/linkedin-conversion";

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
        const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

        try {
            // Prepare form data with proper field names for Web3Forms
            const submissionData = {
                access_key: "a05ea8f5-1d65-4506-bde6-e519d7f5ea71",
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

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                trackLinkedInConversion(submissionId);
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
                            className="bg-white border-gray-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary h-12"
                            data-testid="input-firstname-hero"
                        />
                        <Input
                            name="lastName"
                            placeholder="Nama belakang *"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="bg-white border-gray-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary h-12"
                            data-testid="input-lastname-hero"
                        />
                    </div>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email kerja *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-gray-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary h-12"
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
                            className="flex-1 bg-white border-gray-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary h-12"
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
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">Nama Depan<span className="text-primary">*</span></Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors h-11"
                        data-testid="input-firstname"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700">Nama Belakang<span className="text-primary">*</span></Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors h-11"
                        data-testid="input-lastname"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold text-gray-700">Email Kantor<span className="text-primary">*</span></Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors h-11"
                        data-testid="input-email"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-xs font-semibold text-gray-700">Jabatan<span className="text-primary">*</span></Label>
                    <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors h-11"
                        data-testid="input-jobtitle"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label className="text-xs font-semibold text-gray-700">Apakah Anda memiliki aplikasi yang sedang tayang di App Store?<span className="text-primary">*</span></Label>
                <Select value={formData.appLive} onValueChange={(value) => setFormData({ ...formData, appLive: value })}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors h-11" data-testid="select-applive">
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
                <Label htmlFor="message" className="text-xs font-semibold text-gray-700">Bagaimana kami bisa membantu? (Opsional)</Label>
                <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-50 border-gray-200 rounded-lg focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors min-h-[96px] resize-none"
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
                    Saya setuju untuk dihubungi oleh ASOWin, dan saya menerima ketentuan pemrosesan data yang tercantum dalam <Link href="/privacy-policy" className="text-primary hover:underline">Kebijakan Privasi</Link>.<span className="text-primary">*</span>
                </Label>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 font-semibold mt-2 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40" data-testid="button-submit" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Kirim permintaan audit"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
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
        { name: "Pepperfry", href: "/success-stories/pepperfry/" },
        { name: "Bybit", href: "/success-stories/bybit/" },
        { name: "Indiabulls Securities", href: "/success-stories/indiabulls-securities/" },
        { name: "LSM Apps", href: "/success-stories/lsm-apps/" },
        { name: "Viker Games", href: "/success-stories/viker-games/" },
    ];

    // One approved quote with a single attribution; other cards link to published case studies.
    const testimonial = {
        quote: "We absolutely love the work the ASOWin team does for our App on a daily basis. Super satisfied and we highly value the dedication and high quality service offered.",
        note: "Kutipan asli dalam bahasa Inggris",
        company: "Pepperfry",
        href: "/success-stories/pepperfry/",
    };

    const caseStudyCards = ["indiabulls", "bybit"].map((key) => ({
        href: PROOF[key].href,
        name: PROOF[key].name,
        result: PROOF[key].summaryId,
    }));

    const benefits = [
        "Tanpa kontrak jangka panjang",
        "Audit ASO komprehensif gratis",
        "Bayar bulanan, dapat dibatalkan kapan saja",
        "Account Manager khusus",
        "Laporan kinerja mingguan",
        "Dukungan Slack & Email 24/7",
    ];

    return (
        <div className="min-h-screen bg-background overflow-hidden aso-agency-page home-theme">
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #014458 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28 bg-gradient-to-b from-[#FFEDE3] to-white">
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
                                <span className="text-foreground">Agensi </span>
                                <span className="gradient-text">Optimasi App Store</span>
                                <span className="text-foreground"> di Indonesia</span>
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
                                <Image
                                    src="/phone-id.webp"
                                    alt="Ponsel yang menampilkan aplikasi peringkat #1 di pencarian App Store"
                                    width={2420}
                                    height={2266}
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
                        STUDI KASUS KLIEN
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {clientLogos.map((client, index) => (
                            <Link
                                key={client.href}
                                href={client.href}
                                className="text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
                                data-testid={`client-logo-${index}`}
                            >
                                {client.name}
                            </Link>
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
                            Testimoni dan Hasil Klien
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 bg-card border-border" data-testid="testimonial-0">
                            <blockquote className="text-foreground mb-2 text-sm leading-relaxed">
                                <span lang="en">"{testimonial.quote}"</span>
                            </blockquote>
                            <p className="text-xs text-muted-foreground mb-4">({testimonial.note})</p>
                            <Link href={testimonial.href} className="text-sm font-medium text-foreground hover:text-primary">
                                {testimonial.company}
                            </Link>
                        </Card>
                        {caseStudyCards.map((study) => (
                            <Link key={study.href} href={study.href} className="block">
                                <Card className="p-6 h-full bg-card border-border hover-elevate">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Studi kasus</p>
                                    <p className="text-lg font-semibold text-foreground mb-2">{study.name}</p>
                                    <p className="text-sm text-muted-foreground mb-6">{study.result}</p>
                                    <span className="text-sm font-medium text-primary">Baca studi kasus →</span>
                                </Card>
                            </Link>
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
                                <Image
                                    src="/phone-id.webp"
                                    alt="Ponsel yang menampilkan aplikasi peringkat #1 di pencarian App Store"
                                    width={2420}
                                    height={2266}
                                    className="w-full h-auto"
                                />
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

            {/* Full Contact Form Section: split card, brand panel + form */}
            <section className="py-20 sm:py-24 bg-[#FFF6EE]" id="contact">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#014458]/10 ring-1 ring-black/5">
                        {/* Left - brand panel */}
                        <div className="relative overflow-hidden bg-[#014458] text-white p-8 sm:p-10 lg:p-12 flex flex-col">
                            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1d7f9c]/50 blur-3xl" aria-hidden="true" />
                            <div className="pointer-events-none absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#fdb124]/10 blur-3xl" aria-hidden="true" />
                            <div className="relative">
                                <p className="text-xs font-semibold text-[#FFB842] uppercase tracking-[0.2em] mb-4">Hubungi kami</p>
                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                                    Ada yang bisa kami bantu?
                                </h2>
                                <p className="text-white/75 mb-8">
                                    Ceritakan tentang aplikasi Anda. Tim kami akan meninjau listing Anda dan mengirimkan audit ASO gratis.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {benefits.slice(0, 4).map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-3 text-sm sm:text-base">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fdb124]/20 flex-shrink-0">
                                                <CheckCircle className="w-4 h-4 text-[#FFB842]" />
                                            </span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative mt-auto space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/15 pt-6 text-sm">
                                    <div>
                                        <p className="text-white/50 text-xs mb-1">Waktu balasan</p>
                                        <p className="flex items-center gap-2 font-medium"><Clock className="w-4 h-4 text-[#FFB842]" />24 jam</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs mb-1">Email</p>
                                        <a href="mailto:support@asowin.com" className="flex items-center gap-2 font-medium hover:text-[#FFB842]">
                                            <Mail className="w-4 h-4 text-[#FFB842] flex-shrink-0" />support@asowin.com
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-3">Studi kasus klien</p>
                                    <div className="flex flex-wrap gap-2">
                                        {clientLogos.map((client) => (
                                            <Link
                                                key={client.href}
                                                href={client.href}
                                                className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15 text-xs font-medium text-white/85 hover:bg-white/20 hover:text-white transition-colors"
                                            >
                                                {client.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - form */}
                        <div className="p-8 sm:p-10 lg:p-12">
                            <h3 className="text-2xl font-bold text-foreground mb-1">Dapatkan audit ASO gratis</h3>
                            <p className="text-sm text-muted-foreground mb-8">Isi formulir di bawah ini. Tidak perlu kartu kredit.</p>
                            <ContactForm variant="full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-[#014458] relative overflow-hidden">
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

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Siap untuk Peringkat Lebih Tinggi?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                        Dapatkan audit ASO komprehensif dan temukan cara meningkatkan peringkat Anda.
                    </p>

                    <div className="max-w-xl mx-auto">
                        <ContactForm variant="compact" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/70 text-sm">
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
