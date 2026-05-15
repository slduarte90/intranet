(async () => {
  try {
    const response = await fetch("/index.html", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Nao foi possivel carregar a intranet.");
    }

    const html = await response.text();
    document.open();
    document.write(html);
    document.close();
  } catch {
    document.body.textContent = "Nao foi possivel carregar a intranet.";
  }
})();
