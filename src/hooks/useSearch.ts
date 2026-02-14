import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useSearch<T>(items: T[], key: keyof T, delay = 300) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSetQuery = useCallback(
    (value: string) => {
      setQuery(value);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setDebouncedQuery(value);
      }, delay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery.trim()) return items;

    const lowerQuery = debouncedQuery.toLowerCase();

    return items.filter((item) => {
      const value = item[key];
      return (
        typeof value === "string" && value.toLowerCase().includes(lowerQuery)
      );
    });
  }, [items, key, debouncedQuery]);

  return { query, setQuery: handleSetQuery, filteredItems };
}
