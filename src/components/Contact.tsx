import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">연락처</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">이메일</h3>
            <p className="text-gray-600">your@email.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Phone className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">전화번호</h3>
            <p className="text-gray-600">010-1234-5678</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">위치</h3>
            <p className="text-gray-600">서울특별시</p>
          </div>
        </div>
      </div>
    </section>
  );
}