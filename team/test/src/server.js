const express = require("express");
const axios = require("axios");
const fs = require("fs");  // 파일 시스템 모듈
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/crime", async (req, res) => {
  try {
    const response = await axios.get("https://apis.data.go.kr/B554626/CrimeAnalysis/getCrimeAnalysis", {
      params: {
        serviceKey: "gCP9Wp4GNcGgpd2KTtr1Q6AzLCNjXRfJRDei/umqY7LRIGSvRvouYye4huw7Rrh+tqGFtWdQ4XvylTpopYB3hA==", // 디코딩된 서비스 키
        type: "json",
        sht: "T188653019959688",
        statsYr: "2022",
        artcl: "A009,A010,A011,A013,A016,A018,A020,A023,A031,A035,A036,A045,A046,A047,A049,A050" // 범죄 코드들
      },
      headers: {
        Accept: "*/*"
      }
    });

    // 받은 데이터를 JSON 파일로 저장하기
    const data = response.data;
    const filePath = "./crime_data_2022.json";  // 저장할 파일 경로
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(`Data saved to ${filePath}`);

    res.json({ message: "Data saved to file", filePath: filePath }); // 클라이언트에게 파일 저장 완료 응답
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});