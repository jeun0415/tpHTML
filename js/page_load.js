const pageLoadData = {
  slider: {},
  category: {
    css: ["../css/k-style.css", "../css/category.css", "../css/item.css"],
    js: ["../js/category.js"],
  },
};

document.querySelectorAll(".load_page").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");

    // 페이지 데이터 확인
    const pageData = pageLoadData[page];
    if (!pageData) {
      console.error(`No data found for page: ${page}`);
      return;
    }

    // HTML 페이지 로드
    fetch(`${page}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("dynamic_content_load").innerHTML = html;

        // 이곳에 초기화 코드를 넣습니다.
        // CSS 파일 로드
        if (pageData.css) {
          pageData.css.forEach((cssUrl) => loadCSS(cssUrl));
        }

        // JavaScript 파일 로드 및 초기화
        if (pageData.js) {
          loadScripts(pageData.js, () => {
            initializeModules(page);
          });
        }
      })
      .catch((error) => {
        console.error("Error loading page:", error);
      });
  });
});

// Function to load CSS files
function loadCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${url}?t=${new Date().getTime()}`; // Cache-busting query
  link.onload = () => console.log(`CSS loaded: ${url}`);
  link.onerror = () => console.error(`Error loading CSS: ${url}`);
  document.head.appendChild(link);
}

// Function to load JavaScript files
// function loadScripts(jsUrls, callback) {
//   let loadedScripts = 0;

//   jsUrls.forEach((jsUrl) => {
//     // 중복 로드 방지: 기존 스크립트를 제거
//     const existingScript = Array.from(document.querySelectorAll("script")).find(
//       (script) => script.src.includes(jsUrl)
//     );
//     if (existingScript) {
//       existingScript.remove();
//     }

//     const script = document.createElement("script");
//     script.type = "module";
//     script.src = `${jsUrl}?t=${new Date().getTime()}`;
//     script.onload = () => {
//       console.log(`Script loaded: ${jsUrl}`);
//       loadedScripts++;
//       if (loadedScripts === jsUrls.length && callback) {
//         callback();
//       }
//     };
//     script.onerror = () => console.error(`Error loading script: ${jsUrl}`);
//     document.body.appendChild(script);
//   });
// }

const loadedScripts = new Set();

// function loadJS(url, callback) {
//   if (loadedScripts.has(url)) {
//     console.log(`Script already loaded: ${url}`);
//     if (callback) callback();
//     return;
//   }

//   const script = document.createElement("script");
//   script.type = "module";
//   script.src = `${url}`; // Remove cache-busting query
//   script.onload = () => {
//     console.log(`Script loaded: ${url}`);
//     loadedScripts.add(url);
//     if (callback) callback();
//   };
//   script.onerror = () => console.error(`Error loading script: ${url}`);
//   document.body.appendChild(script);
// }

// Function to load JavaScript files
function loadScripts(jsUrls) {
  jsUrls.forEach((jsUrl) => {
    // Remove existing script if present
    const existingScript = Array.from(document.querySelectorAll("script")).find(
      (script) => script.src === jsUrl
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "module"; // Ensure the script is treated as a module
    script.src = `${jsUrl}?t=${new Date().getTime()}`; // Cache-busting query
    script.onload = () => console.log(`Script loaded: ${jsUrl}`);
    script.onerror = () => console.error(`Error loading script: ${jsUrl}`);
    document.body.appendChild(script);
  });
}

function initializeModules(page) {
  switch (page) {
    case "category":
      import("../js/category.js")
        .then((module) => {
          module.initializeCategoryPage();
        })
        .catch((err) => console.error("Error importing category.js:", err));
      break;
    // 다른 페이지에 대한 초기화 작업도 이곳에 추가할 수 있습니다.
    default:
      console.error("No initialization logic defined for:", page);
  }
}
