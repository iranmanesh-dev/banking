const HeaderBox = (
	{
		type = 'title',
		title,
		user,
		subtext
	}: HeaderBoxProps
) => {
	return (
		<div className='header-box rubik'>
			<h1 className="header-box-title">
				{title}
				{type === 'greeting' && (
					<span className='text-bankGradient'>&nbsp;{user}</span>
				)}
			</h1>
			<p className='header-box-subtext font-vazir'>{subtext}</p>
		</div>
	)
}

export default HeaderBox
