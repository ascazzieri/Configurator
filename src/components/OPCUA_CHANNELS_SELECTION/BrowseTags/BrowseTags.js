import { Transfer, Tree } from 'antd';
import './BrowseTags.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useEffect, useState, useReducer } from 'react';
import './BrowseTags.css'
import { find_tags, get_tags } from './tags_operations'



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
            render={(item) => item.key}
            showSelectAll={true}
            showSearch={true}


        >
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    return (
                        <Tree
                            draggable={false}
                            checkable
                            checkedKeys={checkedKeys}
                            treeData={generateTree(dataSource, targetKeys)}
                            onCheck={(_, { node: { key } }) => {
                                onItemSelect(key, !isChecked(checkedKeys, key));
                            }}

                        />
                    );
                }
            }}
        </Transfer>
    );
};


const messageReducer = (state, action) => {
    if (action.type === 'PARENT_ALREADY_PRESENT') {
        return { isTransferAlert: true, isTransferAlertMessage: `${action.removedTag} because there was already a related parent of it, founded: ${action.relatedParent}'`, TransferAlertColor: { color: 'orange' } }
    } else {
        return { isTransferAlert: false, isTransferAlertMessage: '', TransferAlertColor: 'black' }
    }

}



const BrowseTags = (props) => {
    const { show, handleClose, selectedChannelID } = props;
    const [targetKeys, setTargetKeys] = useState([]);
    const [addRemoveButton, setAddRemoveButton] = useState(false)
    const [TagsMessages, dispatchTagsMessages] = useReducer(messageReducer, { isTransferAlert: false, isTransferAlertMessage: '', TransferAlertColor: { color: 'black' } })
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const onChange = (key) => {
        setTargetKeys(key);
    };
    useEffect(() => {

        if (targetKeys.length !== 0) {
            let showRemovedTags = [];
            setIsButtonDisabled(false)

            for (let i = 0; i < targetKeys.length; i++) {
                let newString = targetKeys[i];
                let newStringLength = newString.length;
                for (let k = 0; k < targetKeys.length; k++) {
                    if (targetKeys[k] === targetKeys[i]) {
                        /*           console.log('Stesso array=> ' + targetKeys[k] + ' : ' + targetKeys[i]) */
                        continue;

                    }
                    let checkedString = targetKeys[k];
                    let checkedPortion = checkedString.substring(0, newStringLength);
                    /*                  console.log('New String: ' + newString + ', checkedPortion: ' + checkedPortion) */
                    if (checkedPortion === newString) {

                        /*                  console.log('Aggiungo il virus di autodistruzione in : ' + targetKeys[k]); */

                        targetKeys[k] += ' has been removed '
                        showRemovedTags.push(targetKeys[k])
                        console.log(showRemovedTags)
                        setAddRemoveButton(!addRemoveButton)
                        dispatchTagsMessages({ type: 'PARENT_ALREADY_PRESENT', removedTag: showRemovedTags, relatedParent: targetKeys[i] })

                    }

                }
                targetKeys.map((item, index) => {
                    if (item.includes(' has been removed ')) {
                        targetKeys.splice(index, 1)
                    }
                })
            }
            setTargetKeys(targetKeys)
        } else if (targetKeys.length === 0) {
            setIsButtonDisabled(true)
        }


    }, [targetKeys, addRemoveButton])









    const [treeData, setTreeData] = useState([]);
    useEffect(() => {
        setTreeData(get_tags())
    }, [])


    const sendTagsList = () => {
        let importedTags = find_tags();
        console.log(targetKeys)

        for (const key of Object.keys(importedTags)) {//Ciclo fra le key dell'oggetto
            keyloop:
            for (let i = 0; i < targetKeys.length; i++) {

                for (let k = 0; k < key.split('.').length; k++) {//Ciclo all'interno dell'array costituito dalla singola key
                    let checkedKeyObject = '';
                    if (k === 0) {
                        checkedKeyObject = key.split('.')[k];
                    }
                    if (k > 0) {
                        for (let j = 0; j < k; j++) {//Aggiungo i pezzi precedenti dell'array
                            checkedKeyObject += `${key.split('.')[j]}.`
                        }
                        checkedKeyObject += `${key.split('.')[k]}`
                    }
                    /*           console.log(targetKeys[i].substring(0, targetKeys[i].length - 1), checkedKeyObject) */
                    if (targetKeys[i].substring(0, targetKeys[i].length - 1) === checkedKeyObject) {
                        importedTags[key] = true
                        /*        console.log('match found') */
                        break keyloop;
                    } else if (targetKeys[i].substring(0, targetKeys[i].length - 1) !== checkedKeyObject) {
                        importedTags[key] = false
                        /*        console.log(key) */
                    }

                }
            }

        }

        props.savedTags(importedTags, selectedChannelID)
        return importedTags
    }





    return (
        <>
            <Offcanvas style={{ width: 800 }} placement='end' show={show} onHide={handleClose}/*  {...props} */>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>OPCUA tags for channel: {selectedChannelID}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {TagsMessages.isTransferAlert && <p style={TagsMessages.TransferAlertColor}>{TagsMessages.isTransferAlertMessage}</p>}
                    <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />
                    <div className="mb-3 button-margin">
                        <Row>

                            <Col md={{ offset: 10 }}>
                                <Button
                                    onClick={sendTagsList}
                                    type="button"
                                    disabled={isButtonDisabled}
                                >
                                    {isButtonDisabled === true ? <>No tags</> : <>Save tags</>}
                                </Button></Col>
                        </Row>


                    </div>



                </Offcanvas.Body>
            </Offcanvas></>

    )

};
export default BrowseTags;