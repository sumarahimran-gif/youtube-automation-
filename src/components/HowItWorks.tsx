import React from 'react';
import { APPLICATION_FORM_URL, RAZORPAY_PAYMENT_URL } from '../constants';
import { ClipboardList, CreditCard, Calendar, Rocket, Lock, Info } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            From application to Creator Hub in a few straightforward steps.
          </h2>
        </div>

        <div className="space-y-6">
          {/* Step 01 */}
          <ThreeDTiltCard intensity={8}>
            <div className="p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-500 mb-1">STEP 01</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">APPLY</h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-xl">
                      Submit your details through the Creator Hub application form.
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    id="step-01-apply-btn"
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20"
                  >
                    <span>Start Application</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>

          {/* Step 02 */}
          <ThreeDTiltCard intensity={8}>
            <div className="p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-500 mb-1">STEP 02</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">COMPLETE PAYMENT</h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-xl mb-3">
                      After submitting your application and proceeding with the program, complete your
                      membership payment securely through the official Razorpay checkout link.
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg">
                      <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>The actual application process comes first. Payment is completed upon proceeding.</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 md:self-center">
                  <a
                    id="step-02-pay-btn"
                    href={RAZORPAY_PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all shadow-md"
                  >
                    <span>Pay &amp; Join Creator Hub</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>

          {/* Step 03 */}
          <ThreeDTiltCard intensity={8}>
            <div className="p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-blue-500">STEP 03</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">BOOK YOUR CALL</h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-xl mb-3">
                      After completing the required joining and payment process, use the provided
                      booking link to schedule your strategy and onboarding call.
                    </p>
                    <p className="text-xs text-gray-400 font-mono">
                      The booking link will be provided once the official booking system is available.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 md:self-center">
                  <button
                    id="step-03-booking-btn"
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-gray-500 bg-white/[0.02] border border-white/5 cursor-not-allowed opacity-80"
                    title="Coming Soon — Booking link provided after application & payment process"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Book Your Call</span>
                    <span className="text-xs text-gray-500">(Coming Soon)</span>
                  </button>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>

          {/* Step 04 */}
          <ThreeDTiltCard intensity={8}>
            <div className="p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-blue-500 mb-1">STEP 04</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">GET STARTED</h3>
                  <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                    Complete the onboarding process and receive the instructions required to access
                    the private Creator Hub community.
                  </p>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>
        </div>
      </div>
    </section>
  );
};
