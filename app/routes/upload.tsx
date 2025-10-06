import { useState } from "react"
import FileUploader from "~/components/FileUploader"

import Navbar from "~/components/Navbar"

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusText, setStatusText] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleFileSelect = (file: File | null) => {
    setFile(file)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget.closest("form")

    if (!form) return
    const formData = new FormData(form)

    const companyName = formData.get("company-name") as string
    const jobTitle = formData.get("job-title") as string
    const jobDescription = formData.get("job-description") as string

    console.log({ companyName, jobTitle, jobDescription, file })
  }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>
            Smart feedback <br /> for your dream job
          </h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="Processing"
                className="w-full"
              />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips.</h2>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="Job Title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  id="job-description"
                  name="job-description"
                  placeholder="Write a clear & concise job description with responsibilities & expectations..."
                  rows={5}
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploaded">Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>

              <button className="primary-button" type="submit">
                Analyze Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
export default upload
