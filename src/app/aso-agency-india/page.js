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
    ChevronRight,
    Building2,
    BookOpen,
    ShoppingBag,
    Sparkles,
    CreditCard,
    Wallet,
    Tv,
    Banknote
} from "lucide-react";
import Lottie from "lottie-react";
import { useState } from "react";
import mainSceneAnimation from "@/../../public/Main Scene.json";

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
                            placeholder="First name *"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="bg-card border-border h-12"
                            data-testid="input-firstname-hero"
                        />
                        <Input
                            name="lastName"
                            placeholder="Last name *"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="bg-card border-border h-12"
                            data-testid="input-lastname-hero"
                        />
                    </div>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Work email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-card border-border h-12"
                        data-testid="input-email-hero"
                        required
                    />
                    <Button type="submit" size="lg" className="h-12 font-semibold" data-testid="button-cta-hero" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Get Free ASO Audit"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    {submitStatus === "success" && (
                        <p className="text-sm text-primary">✓ Thank you! We'll contact you within 24 hours.</p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-sm text-destructive">✗ Something went wrong. Please try again.</p>
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
                            placeholder="Enter your work email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="flex-1 bg-card border-border h-12"
                            data-testid="input-email-compact"
                            required
                        />
                        <Button type="submit" size="lg" className="h-12 px-8 font-semibold" data-testid="button-cta-compact" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Get Free Audit"}
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                    {submitStatus === "success" && (
                        <p className="text-sm text-primary">✓ Thank you! We'll contact you within 24 hours.</p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-sm text-destructive">✗ Something went wrong. Please try again.</p>
                    )}
                </div>
            </form>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm text-foreground">First name<span className="text-primary">*</span></Label>
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
                    <Label htmlFor="lastName" className="text-sm text-foreground">Last name<span className="text-primary">*</span></Label>
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
                <Label htmlFor="email" className="text-sm text-foreground">Work email<span className="text-primary">*</span></Label>
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
                <Label htmlFor="jobTitle" className="text-sm text-foreground">Job title<span className="text-primary">*</span></Label>
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
                <Label className="text-sm text-foreground">Do you have an app that's currently live on the app stores?<span className="text-primary">*</span></Label>
                <Select value={formData.appLive} onValueChange={(value) => setFormData({ ...formData, appLive: value })}>
                    <SelectTrigger className="bg-background border-border h-11" data-testid="select-applive">
                        <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 text-gray-900 z-50">
                        <SelectItem value="yes" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Yes, my app is live</SelectItem>
                        <SelectItem value="soon" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Launching soon</SelectItem>
                        <SelectItem value="planning" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">Still in planning phase</SelectItem>
                        <SelectItem value="no" className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">No, I don't have an app yet</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-foreground">How can we help?</Label>
                <span className="text-muted-foreground text-xs ml-2">Optional</span>
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
                    I agree to be contacted by ASOWin, and I accept the data processing terms stated in the <a href="#" className="text-primary hover:underline">Privacy Policy</a>.<span className="text-primary">*</span>
                </Label>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 font-semibold mt-4" data-testid="button-submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Let's connect!"}
            </Button>
            {submitStatus === "success" && (
                <p className="text-sm text-primary text-center">✓ Thank you! We'll contact you within 24 hours.</p>
            )}
            {submitStatus === "error" && (
                <p className="text-sm text-destructive text-center">✗ Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

import { SiGoogleplay, SiAppstore } from "react-icons/si";

export default function AsoAgencyPage() {
    const metrics = [
        { value: "37%", label: "Average Conversion Rate", sublabel: "for all Clients Combined" },
        { value: "136", label: "Keywords Ranked", sublabel: "#1 Position" },
        { value: "10M+", label: "Downloads Delivered", sublabel: "for all Clients Combined" },
        { value: "90", label: "Days to Results", sublabel: "Guaranteed Timeline" },
    ];

    const services = [
        {
            icon: Search,
            title: "Full-Service ASO",
            description: "Boost your app's discoverability and downloads with our comprehensive ASO services. From optimizing metadata to refining your app store listing.",
        },
        {
            icon: Target,
            title: "Keyword Research & Rankings",
            description: "We identify the most relevant and high-performing keywords for your app, enabling it to appear in top searches across Play Store and App Store.",
        },
        {
            icon: BarChart3,
            title: "Design Services & A/B Testing",
            description: "Make a lasting first impression with stunning app screenshots, videos, and icons. We conduct rigorous A/B testing to identify visuals that convert.",
        },
        {
            icon: Star,
            title: "App Reputation Management",
            description: "Maintain a positive app image with our reputation management services. We handle user reviews and ratings, respond to feedback professionally.",
        },
        {
            icon: Rocket,
            title: "Paid User Acquisition (UA)",
            description: "Supercharge your growth with targeted user acquisition campaigns. We leverage Apple Search Ads and other paid channels to maximize ROI.",
        },
        {
            icon: Smartphone,
            title: "Creative Asset Optimization",
            description: "A/B tested screenshots, icons, and promotional videos that convert browsers into loyal users. Data-driven creative decisions.",
        },
    ];

    const clientLogos = [
        { name: "Bajaj Finserv", icon: Building2 },
        { name: "Khatabook", icon: BookOpen },
        { name: "Pepperfry", icon: ShoppingBag },
        { name: "Neo Astro", icon: Sparkles },
        { name: "Anq", icon: CreditCard },
        { name: "CheQ", icon: Wallet },
        { name: "Balaji Astro Guide", icon: Tv },
    ];

    const moreClients = [];

    const testimonials = [
        {
            quote: "We absolutely love the work the ASOWin team does for our App on a daily basis. Super satisfied and we highly value the dedication and high quality service offered.",
            author: "Head of Growth",
            company: "Fortune 500 E-commerce App",
            rating: 5,
        },
        {
            quote: "Our app went from page 3 to top 5 for our main keywords. Downloads increased 280% in just 60 days. The ROI has been incredible.",
            author: "Product Director",
            company: "Leading Fintech Platform",
            rating: 5,
        },
        {
            quote: "The team understands both Play Store ASO and App Store optimization deeply. Real experts who deliver measurable results.",
            author: "VP of Marketing",
            company: "Top Health & Fitness App",
            rating: 5,
        },
    ];

    const benefits = [
        "No long-term contracts required",
        "Free comprehensive ASO audit",
        "Pay monthly, cancel anytime",
        "Dedicated account manager",
        "Weekly performance reports",
        "24/7 Slack & Email support",
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
                            Trusted by Top Indian Apps
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
                                <span className="text-sm font-medium text-muted-foreground">Play Store & App Store Experts</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-main-headline">
                                <span className="text-foreground">#1 </span>
                                <span className="gradient-text">App Store Optimization</span>
                                <span className="text-foreground"> Agency</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl" data-testid="text-subheadline">
                                Rank Higher on Play Store & App Store in 90 Days. Guaranteed.
                            </p>

                            {/* Hero Form */}
                            <div className="mb-8">
                                <ContactForm variant="hero" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Free audit delivered within 24 hours. No credit card required.
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
                        Trusted by Leading Brands Worldwide
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
                        <Badge variant="secondary" className="mb-4">Results That Speak</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Some incredible numbers witnessed across the globe
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
                    <h3 className="text-2xl font-bold mb-4">Ready to boost your app rankings?</h3>
                    <p className="text-muted-foreground mb-6">Get your free ASO audit in 24 hours</p>
                    <ContactForm variant="compact" />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Our ASO Services</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-services-heading">
                            Complete App Store Optimization Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to dominate app store rankings and drive organic downloads.
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
                        <Badge variant="secondary" className="mb-4">Client Success Stories</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            What Our Clients Say
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
                            <Badge variant="secondary" className="mb-4">Why ASOWin</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                The ASO Agency That <span className="gradient-text">Delivers Results</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We're not just another app ranking agency. We combine deep Play Store ASO expertise
                                with App Store keyword ranking strategies to maximize your app's organic growth.
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
                        <Badge variant="secondary" className="mb-4">Our Process</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            How Our App Store Optimization Works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven, data-driven approach to improve your app rankings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Free Audit", desc: "Complete ASO analysis of your app", icon: Search },
                            { step: "02", title: "Strategy", desc: "Custom keyword & ranking plan", icon: Target },
                            { step: "03", title: "Execution", desc: "Optimize listings & creative assets", icon: Zap },
                            { step: "04", title: "Growth", desc: "Track rankings & iterate", icon: TrendingUp },
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
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Get In Touch</p>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                                How can we<br />help?
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
                        <span className="text-sm font-medium text-white">Limited Spots Available This Month</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                        Ready to Rank Higher?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Get a comprehensive ASO audit of your app and discover exactly how to improve your rankings.
                    </p>

                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 h-12 bg-white border-white text-foreground"
                                data-testid="input-email-final"
                            />
                            <Button
                                size="lg"
                                className="h-12 px-8 font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                data-testid="button-cta-final"
                            >
                                Get Free Audit
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/70 text-sm">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>No contracts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Dedicated manager</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Results in 90 days</span>
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
                            The #1 App Store Optimization Agency for Growth-Focused Apps
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
