<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getReservations } from "@/api/api"; // 依照你的檔案路徑調整
import { Reservation } from "@/interfaces/reservation";


const reservations = ref<Reservation[]>([]);

onMounted(async () => {
  try {
    const data = await getReservations();
    console.log("API 回傳資料:", data);
    reservations.value = data;  // 將資料存到響應式變數
  } catch (error) {
    console.error("無法取得預約資料", error);
  }
});
</script>

<template>
  <div>
    <h1>預約資料</h1>
    <table border="1">
      <thead>
        <tr>
          <th>預約編號</th>
          <th>學生編號</th>
          <th>座位編號</th>
          <th>時段編號</th>
          <th>建立時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in reservations" :key="index">
          <td>{{ item.reservation_id }}</td>
          <td>{{ item.student_id }}</td>
          <td>{{ item.seat_id }}</td>
          <td>{{ item.timeslot_id }}</td>
          <td>{{ item.create_time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
