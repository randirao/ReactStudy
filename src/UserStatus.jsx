import React, {useEffect, useState} from "react";

export default function UserStatus(props) {

    const [isOnline, setIsOnline] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${isOnline}명 수용했습니다.`;
    });

    useEffect(() => {
        if (count <= 0) {
            setCount(0);
            alert("접속자가 없습니다.")
        }
    }, [count])

    return (
        <div>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={() => setCount(count+1)}>입장</button>
            <button onClick={() => setCount(count-1)}>퇴장</button>
            {count > 10 && (
                alert("꽉 찼어요~")
            )}

        </div>
    )
}