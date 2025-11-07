import favicons from "favicons";
import fs from "fs";

const source = "public/favicon.png"; // sua imagem base 
const outputPath = "public/favicon/";

const configuration = {
  path: "/favicon/", // caminho base usado no HTML
  appName: "Pilates Fitness",
  appShortName: "Pilates",
  appDescription: "Agende suas aulas de Pilates com facilidade",
  developerName: "Camila Rodrigues",
  theme_color: "#009739",
  background: "#ffffff",
  display: "standalone",
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
  },
};

favicons(source, configuration, (error, response) => {
  if (error) {
    console.error(error.message);
    return;
  }

  // Cria diretório se não existir
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // Salva as imagens e arquivos gerados
  response.images.forEach((image) =>
    fs.writeFileSync(outputPath + image.name, image.contents)
  );
  response.files.forEach((file) =>
    fs.writeFileSync(outputPath + file.name, file.contents)
  );
  response.html.forEach((tag) => console.log(tag));

  console.log("✅ Favicons gerados com sucesso!");
});
