import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import SkeletonLoader from '../Skeleton/Skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { DeleteStudent, GetInfo } from '../../service/action/StudentList.ation';

function ViewStudent({ handleEdit }) {

    const dispatch = useDispatch({ handleEdit })
    const { studentList } = useSelector(state => state.studentReducer)
    const { isLoading } = useSelector((state) => state.studentReducer)

    const handleUpdate = (id) => {

        dispatch(GetInfo(id));
        handleEdit()
    }

    return (
        <>
            <Container>
                {
                    isLoading ? <SkeletonLoader/> :
                        <>
                            <h2>
                                Student List :-
                            </h2>

                            <br />

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Stu Id</th>
                                        <th>FullName</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Address</th>
                                        <th>Gender</th>
                                        <th>Action</th>
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
                                                                Stu.id
                                                            }
                                                        </td>
                                                        <td rowSpan='2'>
                                                            {
                                                                `${Stu.fname} ${Stu.lname}`
                                                            }
                                                        </td>
                                                        <td rowSpan='2'>
                                                            {
                                                                Stu.email
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                Stu.mobile_no
                                                            }
                                                        </td>
                                                        <td rowSpan='2'>
                                                            {
                                                                Stu.address
                                                            }
                                                        </td>
                                                        <td rowSpan='2'>
                                                            {
                                                                Stu.gender
                                                            }
                                                        </td>
                                                        <td rowSpan='2'>
                                                            <div className='d-flex justify-content-around'>
                                                                <Button variant='primary' onClick={() => handleUpdate(Stu.id)}>
                                                                    <PenFill />
                                                                </Button>
                                                                ||
                                                                <Button variant='danger'>
                                                                    <TrashFill onClick={() => dispatch(DeleteStudent(Stu.id))} />
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {
                                                                Stu.parents_no
                                                            }
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </>
                }
            </Container>
        </>
    )
}

export default ViewStudent