import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const EMPTY = {
  name: "",
  address: "",
  phone: "",
  childAge: "",
  gender: "",
  comment: "",
};

// URL-encode for Netlify Forms AJAX submission
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const inputClass =
  "w-full rounded-lg bg-[#1a1040] border border-[#3a2a6b] px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#a686e0] transition-colors";

export default function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [form, setForm] = useState(EMPTY);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const close = () => {
    setOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "register", "bot-field": "", ...form }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-gradient-to-b from-[#ff7700] to-[#ff9f00] text-white font-bold text-sm px-4 py-2 rounded-3xl flex items-center z-10"
      >
        <img src="/assets/icon.png" alt="icon" className="w-4 h-4 mr-2" />
        Register Today!
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 font-montserrat"
            onClick={close}
          >
            <div
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-[#3a2a6b] bg-[#0d0630] p-6 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 text-2xl text-white/70 hover:text-white"
              >
                <IoClose />
              </button>

              <h2 className="mb-1 text-2xl font-bold bg-gradient-to-r from-white via-[#f5c46d] to-[#e94b3c] bg-clip-text text-transparent">
                Register for YEL
              </h2>
              <p className="mb-5 text-sm text-white/70">
                Fill out the form and our team will be in touch.
              </p>

              {status === "success" ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold">Thank you! 🎉</p>
                  <p className="mt-2 text-sm text-white/70">
                    Your registration has been sent. We'll reach out soon.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-6 rounded-3xl bg-gradient-to-r from-[#4B2E84] via-[#000000] to-[#F3732A] px-6 py-2 font-bold text-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  name="register"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  {/* Netlify form plumbing */}
                  <input type="hidden" name="form-name" value="register" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" onChange={onChange} />
                    </label>
                  </p>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/80">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Full name" className={inputClass} />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/80">Address</label>
                    <input name="address" value={form.address} onChange={onChange} required placeholder="Street, City, State, ZIP" className={inputClass} />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/80">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={onChange} required placeholder="(000) 000-0000" className={inputClass} />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-semibold text-white/80">Age of Child</label>
                      <input name="childAge" type="number" min="0" value={form.childAge} onChange={onChange} required placeholder="Age" className={inputClass} />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-semibold text-white/80">Gender</label>
                      <select name="gender" value={form.gender} onChange={onChange} required className={inputClass}>
                        <option value="">Select…</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/80">Comment</label>
                    <textarea name="comment" value={form.comment} onChange={onChange} rows={3} placeholder="Anything you'd like us to know…" className={inputClass} />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again, or call us at 323-305-7255.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-3xl bg-gradient-to-r from-[#4B2E84] via-[#000000] to-[#F3732A] px-6 py-2.5 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Submit Registration"}
                  </button>

                  <p className="pt-2 text-center text-xs text-white/50">
                    Questions? Call 323-305-7255 · Fax 323-389-1527
                  </p>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
