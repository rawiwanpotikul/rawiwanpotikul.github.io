function updateData() {
    // แทนที่ด้วยโค้ดสำหรับดึงข้อมูลของคุณ
    fetch('https://206.189.146.138/api/sensors')
    .then(response => response.json())
    .then(data => {
      document.getElementById('time').textContent = data.timestamp;
      document.getElementById('temp').textContent = data.temperature.toFixed(2);
      document.getElementById('hum').textContent = data.humidity.toFixed(2);
      document.getElementById('lux').textContent = data.luxsensor.toFixed(2);
      document.getElementById('mot').textContent = data.motion;
    });
  }
  setInterval(updateData, 1000); // เรียกใช้ฟังก์ชัน updateData ทุก 1000 มิลลิวินาที (1 วินาที)
  
  // <script src="ตั้งชื่อไฟล์ว่าไรก็ใส่ตามนั้นไอบื้อ.js"></script> วิธีเรียกหา js