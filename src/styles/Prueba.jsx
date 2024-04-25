import './Prueba.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { useEffect, useState } from 'react'

export const Prueba = () => {
  // Simulación de un archivo PDF en base64
  const base64PDF = 'JVBERi0xLjMKJcfsj6IKNSAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCi9DQSAxCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9JbWFnZQovU3VidHlwZSAvVHJhbnNwYXJlbnQKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgovQ29udGVudHMgNCAwIFIKL01lZGlhQm94IFswIDAgNjEyIDc5NF0KL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMjUgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0NvdW50IDEKL0tpZHMgWzUgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMjYgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0NvdW50IDEKL0tpZHMgWzYgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMjcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0NvdW50IDEKL0tpZHMgWzcgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMjggMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0NvdW50IDEKL0tpZHMgWzggMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMjkgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0NvdW50IDEKL0tpZHMgWzEwIDAgUl0KL0NvdW50IDEKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgovQ29udGVudHMgNTAgMCBSCi9Gb250RGVzY3JpcHRpb24gPDwKL0xlbmd0aCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Db250ZW50cyA1MCAwIFIKL0ZvbnROYW1lIC9JbWFnZQovU3RlbVYgMTQKL0tpZHMgWzMgMCBSXS9DcmVhdG9yIC9EZXZpY2VSR0IgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nI3dqWY+CMBDG4Q6w4/MC4yMTAuMTMKCg=='

  // Imprime la representación en base64 del archivo PDF

  return (
    <div className='notciaContent'>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
        <Viewer fileUrl={base64PDF} />
      </Worker>
    </div>
    // <div>
    //   <input type='file' onChange={convertirAPDFBase64} />
    //   {base64PDF && (
    //     <div>
    //       <h2>Contenido Base64 del PDF:</h2>
    //       <textarea
    //         rows='10'
    //         cols='50'
    //         value={base64PDF}
    //         readOnly
    //       />
    //       <div className='notciaContent'>
    //         <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
    //           <Viewer fileUrl={base64PDF} />;
    //         </Worker>

  //       </div>
  //     </div>
  //   )}
  // </div>
  )
}
