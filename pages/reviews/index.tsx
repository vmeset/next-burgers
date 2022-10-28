import { GetServerSideProps, NextPage } from "next";

interface rev {
    id: number,
    body: string
}

const Reviews: NextPage = ({reviews}: any) => {

    return (
        <div>
            {reviews.map((review: rev) =>
                <div key={review.id}>
                    {review.id}
                    {' '}
                    {review.body.slice(0,50)}
                </div>    
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    
    return {
        props: {
            reviews: data.slice(0,5)
        }
    }
}

export default Reviews;