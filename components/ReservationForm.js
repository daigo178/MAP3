import { useState } from "react";
export default function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tables, setTables] = useState(1);
  const [hours, setHours] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !date || !time) return alert("すべての項目を入力してください");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold mb-4">ご予約ありがとうございます！</h1>
        <p>{`お名前：${name}`}</p>
        <p>{`日時：${date} ${time}`}</p>
        <p>{`卓数：${tables}卓`}</p>
        <p>{`利用時間：${hours}時間`}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="space-y-4 border p-4 rounded shadow">
        <h2 className="text-lg font-bold">貸し卓予約フォーム</h2>

        <div>
          <label htmlFor="name">お名前</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="例：山田 太郎" className="w-full border rounded p-2" />
        </div>

        <div>
          <label htmlFor="date">日付</label>
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded p-2" />
        </div>

        <div>
          <label htmlFor="time">時間</label>
          <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full border rounded p-2" />
        </div>

        <div>
          <label htmlFor="tables">卓数</label>
          <input id="tables" type="number" min={1} max={5} value={tables} onChange={(e) => setTables(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>

        <div>
          <label htmlFor="hours">利用時間（時間）</label>
          <input id="hours" type="number" min={1} max={10} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>

        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">予約する</button>
      </div>
    </div>
  );
}
