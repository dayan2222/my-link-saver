document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["savedLinks"], (result) => {
    let links = result.savedLinks || [];
    let ul = document.getElementById("links");
    links.forEach((url) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = url;
      a.textContent = url;
      a.target = "_blank";
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
});
