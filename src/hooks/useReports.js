import { useEffect, useState } from 'react';

const useReports = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('reports-data.json')
            .then(res => res.json())
            .then(data => setReports(data))
    }, []);

    return [reports, setReports];
}

export default useReports;