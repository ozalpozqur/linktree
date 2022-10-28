import { useAuthStore, useLinkStore } from '../store';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import altogic from '../lib/altogic';
import LoadingIcon from './LoadingIcon';
import { FiEdit2, FiTrash } from 'react-icons/fi';

export default function LinkItem({ data }) {
	const { setEditModalIsOpen, setSelectedLink, removeLink } = useLinkStore();
	const [deleteLoading, setDeleteLoading] = useState(false);
	const { user } = useAuthStore();
	const { username } = useParams();
	const isMe = user ? user.username === username : false;

	const editHandler = () => {
		if (!isMe) return;
		setSelectedLink(data);
		setEditModalIsOpen(true);
	};
	const deleteHandler = async () => {
		if (!isMe) return;
		setDeleteLoading(true);
		await altogic.db.model('links').object(data._id).delete();
		removeLink(data._id);
		setDeleteLoading(false);
	};

	return (
		<>
			<article className="flex items-center bg-[#222222] min-h-[3.5rem] rounded-[14px] text-center relative hover:scale-[1.02] transition">
				<a
					rel="noreferrer"
					target="_blank"
					className={`flex-1 flex items-center py-4 justify-center ${isMe ? 'pl-32' : 'pl-16'}`}
					href={data.url}
				>
					<span className="w-[60px] absolute top-0 left-0 bottom-0 flex items-center justify-center">
						<img className="w-8 h-8" src={data.icon.url} alt="" />
					</span>
					<span className="text-sm md:text-base">{data.title}</span>
				</a>

				<button
					onClick={deleteHandler}
					className={`w-[60px] h-full grid place-items-center !outline-none ${!isMe ? 'hidden' : ''}`}
					hidden={!isMe}
				>
					{deleteLoading ? (
						<LoadingIcon className="w-8 h-8" />
					) : (
						<FiTrash size={20} className="!outline-none" />
					)}
				</button>
				<button
					onClick={editHandler}
					className={`w-[60px] h-full grid place-items-center !outline-none ${
						!isMe ? 'invisible pointer-events-none' : ''
					}`}
					hidden={!isMe}
				>
					<FiEdit2 size={20} className="!outline-none" />
				</button>
			</article>
		</>
	);
}
