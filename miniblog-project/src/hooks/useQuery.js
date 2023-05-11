// React.
import { useMemo } from 'react';
// React router.
import { useLocation } from 'react-router-dom';

export function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
};