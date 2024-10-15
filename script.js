      //javascript code here
      function createParagraph()
      {
        const para = document.createElement("p");
        para.textContent="Button clicked";
        document.body.appendChild(para);
      }

      const button = document.querySelector("button");
      button.addEventListener("click",createParagraph);
