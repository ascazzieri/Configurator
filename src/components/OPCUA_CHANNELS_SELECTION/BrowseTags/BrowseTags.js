import { Transfer, Tree } from 'antd';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from 'react';
import './BrowseTags.css'
import { dummy_tags } from './dummy_tags'



// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) => selectedKeys.includes(eventKey);
const generateTree = (treeNodes = [], checkedKeys = []) =>
    treeNodes.map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key),
        children: generateTree(children, checkedKeys),
    }));
const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {

    const transferDataSource = [];
    function flatten(list = []) {
        list.forEach((item) => {
            transferDataSource.push(item);
            flatten(item.children);
        });
    }
    flatten(dataSource);
    return (
        <Transfer
            {...restProps}
            targetKeys={targetKeys}
            dataSource={transferDataSource}
            className="tree-transfer"
            render={(item) => item.title}
            showSelectAll={true}
        >
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    return (
                        <Tree
                            draggable={false}
                            blockNode
                            checkable
                            checkStrictly
                            /*          defaultExpandAll */
                            checkedKeys={checkedKeys}
                            treeData={generateTree(dataSource, targetKeys)}
                            onCheck={(_, { node: { key } }) => {
                                onItemSelect(key, !isChecked(checkedKeys, key));
                            }}
                            onSelect={(_, { node: { key } }) => {
                                onItemSelect(key, !isChecked(checkedKeys, key));
                            }}
                        />
                    );
                }
            }}
        </Transfer>
    );
};

const data = Object.keys(dummy_tags);

let tagTree = {
    serviceFather: "",
    children: [],
    people: [],
    key: ''
};

function create(data) {
    const res = []
    data.forEach(obj => {
        obj.split('.').reduce((r, e, i, a) => {
            const match = r.find(({ title }) => title === e);
            if (!match) {
                const o = Object.create(tagTree);
                o.title = e;
                o.serviceFather = (i === 0 ? 'root' : a[i - 1])
                o.children = [];
                o.key = Math.random();
                r.push(o)
                return r;
            } else {
                if (!a[i + 1]) match.people.push({ title: obj.name })
                return match.children
            }
        }, res)
    })
    return res;
}

/* const result = create(data) */
/* console.log(result) */
/* result.map((element,index) 0> {}) */


const BrowseTags = (props) => {
    const { show, handleClose, selectedChannelID } = props;
    const [targetKeys, setTargetKeys] = useState([]);
    const onChange = (title) => {
        setTargetKeys(title);
    };
    const [treeData, setTreeData] = useState([]);
    useEffect(() => {
        let result = create(data);
        console.log(result)
        setTreeData(result)
    }, [])
    console.log(targetKeys)


    return (
        <>
            {/*      <Button variant="primary" onClick={handleBrowseShow} className="me-2">
                Agents
            </Button> */}
            <Offcanvas style={{ width: 800 }} placement='end' show={show} onHide={handleClose}/*  {...props} */>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tags for: {selectedChannelID}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />


                </Offcanvas.Body>
            </Offcanvas></>

    )

};
export default BrowseTags;