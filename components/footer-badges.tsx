"use client"

import Image from "next/image"

export default function FooterBadges() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {/* Google Partner */}
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 p-4 text-gray-800 shadow-md">
          <span className="text-sm font-medium text-sky-700">شريك جوجل</span>
          <Image
            src="/google-partner-logo.png"
            alt="Google Partner"
            width={80}
            height={32}
            className="object-contain"
            quality={90}
          />
        </div>

        {/* Meta Partner */}
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 p-4 text-gray-800 shadow-md">
          <span className="text-sm font-medium text-sky-700">شريك ميتا</span>
          <Image
            src="/meta-partner-logo.png"
            alt="Meta Partner"
            width={80}
            height={32}
            className="object-contain"
            quality={90}
          />
        </div>

        {/* Saudi Ministry of Commerce */}
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 p-4 text-gray-800 shadow-md">
          <div className="text-right leading-tight">
            <div className="text-sm font-medium text-sky-700">مرخّص من وزارة</div>
            <div className="text-sm font-medium text-sky-700 -mt-0.5">التجارة</div>
          </div>
          <a
            href="https://mc.gov.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            aria-label="وزارة التجارة"
            title="وزارة التجارة"
          >
            <Image
              src="/images/moc-logo.png"
              width={80}
              height={32}
              alt="شعار وزارة التجارة"
                height="40"
                className="block h-10 w-10 rounded-sm object-contain"
            />
          </a>
        </div>

        {/* Additional trust badge placeholder */}
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 p-4 text-gray-800 shadow-md">
          <span className="text-xs font-medium text-sky-700 leading-tight">
            رقم التسجيل الضريبى :<br />
            312954115400003
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
