import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Button, Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function SkeletonLoader() {

    const { studentList } = useSelector(state => state.studentReducer)

    return (
        <>
            <Container>
                    <h2>
                        <Skeleton variant="text" width='210px' />
                    </h2>

                    <br />

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((Stu, Id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td rowSpan='2'>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    <div className='d-flex justify-content-around'>
                                                        <Button variant='none'>
                                                            <Skeleton variant="circular" width={41} height={37} />
                                                        </Button>
                                                        <Button variant='none'>
                                                            <Skeleton variant="circular" width={41} height={37} />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {
                                                        <Skeleton />
                                                    }
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
            </Container>
        </>
    )
}

export default SkeletonLoader;