import { React, useEffect } from "react";
import { getUser } from "../redux/actions";
import { connect } from "react-redux";

const List = ({ getUserAction, userList }) => {
    useEffect(() => {
        getUserAction();
    }, [getUserAction]);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {userList?.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = ({ testReducer }) => {
    const { userList } = testReducer;
    return { userList };
};

export default connect(mapStateToProps, {
    getUserAction: getUser,
})(List);
