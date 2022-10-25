import { FiEdit2 } from 'react-icons/fi';
import { useAuthStore, useLinkStore } from '../store';
import { useParams } from 'react-router-dom';

export default function UserLinks({ links, className, props }) {
	return (
		<section className={`flex flex-col gap-4  ${className ?? ''}`} {...props}>
			{links.map(link => (
				<LinkItem data={link} key={link._id} />
			))}
		</section>
	);
}

function LinkItem({ data }) {
	const { setEditModalIsOpen, setSelectedLink } = useLinkStore();
	const { user } = useAuthStore();
	const { username } = useParams();
	const isMe = user ? user.username === username : false;

	const editHandler = () => {
		if (!isMe) return;
		setSelectedLink(data);
		setEditModalIsOpen(true);
	};

	return (
		<>
			<article className="flex items-center bg-[#222222] min-h-[3.5rem] rounded-[14px] text-center relative hover:scale-[1.02] transition">
				<a
					rel="noreferrer"
					target="_blank"
					className="flex-1 flex items-center py-4 pl-16 justify-center"
					href={data.url}
				>
					<span className="w-[60px] absolute top-0 left-0 bottom-0 flex items-center justify-center">
						<img className="w-8 h-8" src={data.icon.url} alt="" />
					</span>
					<span className="text-sm md:text-base">{data.title}</span>
				</a>

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
