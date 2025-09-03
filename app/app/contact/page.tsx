"use client";

import { useState } from "react";

interface Message {
	id: number;
	role: 'user' | 'assistant';
	content: string;
	timestamp: Date;
}

export default function ContactPage() {
	const [messages, setMessages] = useState<Message[]>([
		{ 
			id: 1,
			role: 'assistant', 
			content: '안녕하세요! 무엇을 도와드릴까요?', 
			timestamp: new Date('2025-09-03T09:00:00')
		},
		{ 
			id: 2,
			role: 'user', 
			content: '안녕하세요! 문의드립니다.', 
			timestamp: new Date('2025-09-03T09:01:00')
		},
	]);
	const [input, setInput] = useState("");

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString('ko-KR', { 
			hour: '2-digit', 
			minute: '2-digit',
			hour12: false 
		});
	};

	const formatDate = (date: Date) => {
		const today = new Date();
		const messageDate = new Date(date);
		
		if (messageDate.toDateString() === today.toDateString()) {
			return '오늘';
		}
		
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		if (messageDate.toDateString() === yesterday.toDateString()) {
			return '어제';
		}
		
		return messageDate.toLocaleDateString('ko-KR', { 
			month: 'long', 
			day: 'numeric' 
		});
	};

	const shouldShowDateSeparator = (currentMessage: Message, previousMessage?: Message) => {
		if (!previousMessage) return true;
		
		const currentDate = new Date(currentMessage.timestamp).toDateString();
		const previousDate = new Date(previousMessage.timestamp).toDateString();
		
		return currentDate !== previousDate;
	};

	const handleSend = () => {
		if (!input.trim()) return;
		const newMessage: Message = {
			id: messages.length + 1,
			role: 'user',
			content: input,
			timestamp: new Date()
		};
		setMessages([...messages, newMessage]);
		setInput("");
		setTimeout(() => {
			const assistantMessage: Message = {
				id: messages.length + 2,
				role: 'assistant',
				content: '문의해주셔서 감사합니다. 빠른 답변 드리겠습니다.',
				timestamp: new Date()
			};
			setMessages((prev) => [...prev, assistantMessage]);
		}, 800);
	};

	return (
		<main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-24 px-4 flex flex-col">
			{/* 대화 영역 */}
			<div className="flex-1 flex flex-col justify-center items-center">
				<div className="w-full max-w-xl flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow h-[60vh]">
					{/* 메시지 영역 */}
					<div className="flex-1 overflow-y-auto p-4">
						{messages.map((message, index) => {
							const previousMessage = index > 0 ? messages[index - 1] : undefined;
							const showDateSeparator = shouldShowDateSeparator(message, previousMessage);

							return (
								<div key={message.id}>
									{/* 날짜 구분선 */}
									{showDateSeparator && (
										<div className="flex justify-center my-4">
											<div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
												<span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
													{formatDate(message.timestamp)}
												</span>
											</div>
										</div>
									)}

									{/* 메시지 */}
									<div className={message.role === 'user' ? 'text-right mb-4' : 'text-left mb-4'}>
										<div
											className={
												message.role === 'user'
													? 'inline-block bg-primary-600 text-white px-4 py-2 rounded-lg max-w-xs'
													: 'inline-block bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg max-w-xs'
											}
										>
											{message.content}
										</div>
										{/* 시간 표시 */}
										<div className={`text-xs text-gray-400 dark:text-gray-500 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
											{formatTime(message.timestamp)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* 메시지 입력창 - 최하단 고정 */}
			<div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4">
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4">
					<div className="flex gap-2">
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
							placeholder="메시지를 입력하세요..."
							onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
						/>
						<button
							onClick={handleSend}
							className="px-5 py-2 rounded-lg bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition"
						>
							전송
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}