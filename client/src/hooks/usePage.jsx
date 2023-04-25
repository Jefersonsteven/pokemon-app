import { useMemo } from "react";

export const usePage = (
    iterableArray,
    numberElementsPerPage,
    currentPage,
) => {

    const countPage = useMemo(() => {
        if (numberElementsPerPage <= 0 || iterableArray.length === 0) {
            return [];
        }
        return Array.from(
            { length: Math.ceil(iterableArray.length / numberElementsPerPage) },
            (_, i) => i + 1
        );
    }, [numberElementsPerPage, iterableArray]);

    const Start = currentPage * numberElementsPerPage;
    const End = Start + numberElementsPerPage;
    const page = iterableArray.slice(Start, End);

    return { page, countPage };
}