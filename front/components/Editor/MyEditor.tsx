import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useCallback, useRef } from 'react';
import { NextPage } from 'next';
import { CreateNoticeDesc, CreateNoticeTitle, EditorButton, TitleInput } from './style';
import { useStringInput } from 'hooks/useInput';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import { useAppDispatch } from 'hooks/reduxHooks';
import { noticeActions } from 'src/store/reducers/noticeReducer';

const WysiwygEditor: NextPage = () => {
    const { user, groups } = useSelector((state: RootState) => state.user);

    const dispatch = useAppDispatch();

    const title = useStringInput('');

	const editorRef = useRef(null);
    const toolbarItems = [ ['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync'], ];
    
    const onSubmit = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const editorIns = editorRef.current.getInstance();
        const content = editorIns.getMarkdown();

        const notice = {
            userId: user.id,
            groupId: groups[0].id,
            title: title.value,
            content: content
        }

        dispatch(noticeActions.createNoticeRequest(notice));
    }, [user, groups, dispatch])

    return (
    	<div>
            <CreateNoticeTitle>Create Notice</CreateNoticeTitle>
            <CreateNoticeDesc>Please notice detail bellow.</CreateNoticeDesc>
            <TitleInput type='text' name='title' placeholder='제목을 입력해주세요.' {...title} />
        	<Editor
                ref={editorRef} 
                initialValue=""
                initialEditType='wysiwyg'
                hideModeSwitch={true} 
                height='500px' 
                theme={''}
                usageStatistics={false}
                toolbarItems={toolbarItems}
                plugins={[colorSyntax, ]}
            />
            <EditorButton onClick={onSubmit}>Write</EditorButton> 
        </div>
    )
}

export default WysiwygEditor;