import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function () {
      let top = document.getElementById('pdfDom')
      if (top != null) {
        top.scrollIntoView()
        top = null
      }
      const title = this.exportPDFtitle
      const scale = 2
      // 滚动到顶部，避免打印不全
      document.documentElement.scrollTop = 0
      html2Canvas(document.querySelector('#pdfDom'), {
          allowTaint: true, // Whether to allow cross-origin images to taint the canvas
          scale // The scale to use for rendering. Defaults to the browsers device pixel ratio.
      }).then((canvas) => {
          const contentWidth = canvas.width / scale
          const contentHeight = canvas.height / scale
          const pdf = new JsPDF('', 'pt', [contentWidth, contentHeight])
          const pageData = canvas.toDataURL('image/jpeg', 1.0)
          pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight)
          pdf.save(`${title}.pdf`)
      })
      // html2Canvas(document.querySelector('#pdfDom'), {
      //   allowTaint: true
      // }).then(function (canvas) {
      //   const contentWidth = canvas.width
      //   const contentHeight = canvas.height
      //   const pageHeight = contentWidth / 1196.70 * 841.89
      //   let leftHeight = contentHeight
      //   let position = 0
      //   const imgWidth = 1196.70
      //   const imgHeight = 1196.70 / contentWidth * contentHeight
      //   const pageData = canvas.toDataURL('image/jpeg', 1.0)
      //   const PDF = new JsPDF('l', 'pt', 'a4')
      //   if (leftHeight < pageHeight) {
      //     PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      //   } else {
      //     while (leftHeight > 0) {
      //       PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
      //       leftHeight -= pageHeight
      //       position -= 841.89
      //       if (leftHeight > 0) {
      //         PDF.addPage()
      //       }
      //     }
      //   }
      // PDF.save(title + '.pdf')
      // })
    }
  }
}
