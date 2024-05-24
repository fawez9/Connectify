import { useEffect, useState } from "react";

type ChatScrollProps = {
  chatRef: React.RefObject<HTMLDivElement>;
  bottomRef: React.RefObject<HTMLDivElement>;
  shouldLoadMore: boolean;
  loadMore: () => void;
  data: any; // Adjust the type as per your useChatQuery data structure
};

export const useChatScroll = ({ chatRef, bottomRef, shouldLoadMore, loadMore, data }: ChatScrollProps) => {
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);

  useEffect(() => {
    const checkScrollToBottom = () => {
      const topDiv = chatRef.current;
      if (!topDiv) return false;
      const distanceFromBottom = topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight;
      return distanceFromBottom <= 100;
    };

    // Check if should scroll to bottom on initial load
    if (data) {
      const shouldScroll = checkScrollToBottom();
      if (shouldScroll) {
        setShouldScrollToBottom(true);
      }
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const topDiv = chatRef.current;
      if (!topDiv) return;

      const scrollTop = topDiv.scrollTop;
      if (scrollTop === 0 && shouldLoadMore) {
        loadMore();
      }
    };
    if (shouldScrollToBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScrollToBottom(false); // Reset after scrolling
    }

    chatRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      chatRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [chatRef, shouldLoadMore, loadMore, shouldScrollToBottom]);
};
