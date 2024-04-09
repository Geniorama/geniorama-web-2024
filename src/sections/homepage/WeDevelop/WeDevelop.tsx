import styles from './WeDevelop.module.css';

export default function WeDevelop() {
    return (
        <section>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/2'>
                        <h2 className={`${styles.title}`} style={{ color: 'white' }}>/We Develop.</h2>
                    </div>
                    <div className='w-1/3'>
                        <p className={`${styles.desc}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut optio laboriosam id aperiam. Similique harum sunt ex aperiam? At exercitationem fugit ipsam? Necessitatibus eveniet fugit accusantium sed vero aliquid?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
