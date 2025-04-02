import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("ko-KR"));

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString("ko-KR")), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>안녕하세요</h1>
            <h2>현재 시간: {time}</h2>
        </div>
    );
}

export default Clock;