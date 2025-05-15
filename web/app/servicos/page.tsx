import type React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Text } from "@/src/presentation/shared/Text";
import { useServicesData } from "@/hooks/use-services";
import { Title } from "@/src/presentation/shared/Title";
import { SubTitle } from "@/src/presentation/shared/SubTitle";
import { IconContainer } from "@/src/presentation/shared/Icon";

interface ServiceCardProps {
  title: string;
  className?: string;
  icon: React.ReactNode;
}

export function ServiceCard({ icon, title, className }: ServiceCardProps) {
  return (
    <div className={cn("flex flex-col gap-7 w-full p-[50px]", className)}>
      <IconContainer icon={icon} />
      <h3 className="text-xl text-[#E6E6E6] tracking-[-0.12px] font-medium max-w-[299px]">
        {title}
      </h3>
    </div>
  );
}

export default function Servicos() {
  const { designData, engineeringData, projectManagementData } =
    useServicesData();

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="flex items-center justify-center relative h-[336px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />

        <Image
          width={1200}
          height={300}
          alt="Services Hero"
          src="/placeholder.svg?height=300&width=1200"
          className="object-cover w-full h-full absolute inset-0"
        />

        <div className="flex h-full flex-col items-center justify-center gap-3.5 p-0 z-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300">
            Transforming your brilliant ideas into remarkable digital solutions
            that will make your audience captivated by your brand.
          </p>
        </div>
      </section>

      <section className="flex flex-col mt-12 w-full">
        <Title className="mb-3.5 px-12">Design</Title>
        <Text className="tracking-[-0.108px] mb-12 max-w-7xl px-12">
          Our creative design team is passionate about creating beautiful,
          user-centric designs that captivate audiences and elevate your brand.
          We focus on creating intuitive, visually appealing interfaces that
          engage users.
        </Text>

        <Text className="text-[22px] text-white w-fit h-fit ml-12 p-[12px_14px] bg-[#262626] rounded-lg mb-24">
          Our design services include:
        </Text>

        {designData.map((section, index) => (
          <div key={index}>
            <SubTitle className="mb-12 px-12 text-[#98989A]">
              {section.subtitle}
            </SubTitle>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {section.services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  className={service.className}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col mt-12 w-full">
        <Title className="mb-3.5 px-12">Engineering</Title>
        <Text className="tracking-[-0.108px] mb-12 max-w-7xl px-12">
          Our tech masterminds are always ready to transform your ideas into
          innovative and scalable solutions. We leverage the most effective
          technologies to build powerful and reliable applications tailored to
          your specific needs.
        </Text>

        <Text className="text-[22px] text-white w-fit h-fit ml-12 p-[12px_14px] bg-[#262626] rounded-lg mb-24">
          Our engineering services include:
        </Text>

        {engineeringData.map((section, index) => (
          <div key={index}>
            <SubTitle className="mb-12 px-12 text-[#98989A]">
              {section.subtitle}
            </SubTitle>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {section.services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  className={service.className}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col mt-12 w-full">
        <Title className="mb-3.5 px-12">Project Management</Title>
        <Text className="tracking-[-0.108px] mb-12 max-w-7xl px-12">
          Our tech masterminds are always ready to transform your ideas into
          innovative and scalable solutions. We leverage the most effective
          technologies to build powerful and reliable applications tailored to
          your specific needs.
        </Text>

        <Text className="text-[22px] text-white w-fit h-fit ml-12 p-[12px_14px] bg-[#262626] rounded-lg mb-24">
          Our project management services include:
        </Text>

        {projectManagementData.map((section, index) => (
          <div key={index}>
            <SubTitle className="mb-12 px-12 text-[#98989A]">
              {section.subtitle}
            </SubTitle>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {section.services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  className={service.className}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="CTA Background"
          width={1200}
          height={400}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            Whether you&apos;re starting from scratch or looking to revamp your
            existing digital presence, our team has the expertise and creativity
            to transform your vision into reality.
          </p>
          <Button className="bg-white text-black hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
