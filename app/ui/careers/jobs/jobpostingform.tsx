    'use client'
    import React, { ReactNode, useEffect, useState } from "react"
    import { Editor, EditorContent, useEditor } from '@tiptap/react'
    import StarterKit from '@tiptap/starter-kit'
    import Underline from '@tiptap/extension-underline'
    import BulletList from "@tiptap/extension-bullet-list"
    import OrderedList from "@tiptap/extension-ordered-list"
    import ListItem from "@tiptap/extension-list-item"
    import Link from "@tiptap/extension-link"

    interface JobFormData {
        title: string;
        company: string;
        location: string;
        salary: string;
        description: string;
    }
    
    interface FormErrors {
        title?: string;
        company?: string;
        location?: string;
        salary?: string;
        description?: string;
        requirements?: string;
        benefits?: string;
    }

    export default function JobPostingForm() {


        const EditorToolbar: React.FC<{editor: Editor | null}> = ({editor}) => {
            if(!editor){
                return null
            }
            return(
                <div className="">
                    {/* Bold */}
                    <button type="button" className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-0 ${editor.isActive('bold') ? 'font-bold': 'font-normal' }`} onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
                    {/* Italic */}
                    <button type="button" className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-4 ${editor.isActive('italic') ? 'font-bold': 'font-normal' }`} onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
                    {/* Underline */}
                    <button type="button" className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-4 ${editor.isActive('underline') ? 'font-bold': 'font-normal' }`} onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
                    {/* Bullet List */}
                    <button type="button" className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-4 ${editor.isActive('bulletList') ? 'font-bold': 'font-normal' }`} onClick={() => editor.chain().focus().toggleBulletList().run()}>Bullet List</button>
                    {/* Ordered List */}
                    <button type="button" className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-4 ${editor.isActive('orderedList') ? 'font-bold': 'font-normal' }`} onClick={() => editor.chain().focus().toggleOrderedList().run()}>Ordered List</button>
                    {/* Link */}
                    <button type="button" 
                    onClick={
                        () => {
                        const url = window.prompt('URL')
                            if(url)
                            {
                                editor.chain().focus().setLink({href: url}).run()
                            }
                        }
                    }
                    className={`px-2 py-1 bg-sky-900 tracking-wide rounded-md text-gray-100 ml-4 ${editor.isActive('link') ? 'font-bold': 'font-normal' }`}>Link</button>

                </div>
            )
        }

        const [jobData, setJobData] = useState<JobFormData>({
            title: '',
            company:'',
            location: '',
            salary:'',
            description:'<p>Enter job description here</p>',
        })

        const [errors,setErrors] = useState<FormErrors>({
            title: undefined,
            company: undefined,
            location: undefined,
            salary: undefined,
            description: undefined,
            requirements: undefined,
            benefits: undefined
        })

        const handleEditorChange= (name:  keyof JobFormData, content: string):void=> {
            setJobData(prev => ({
                ...prev,
                [name]: content
            }))
            if(errors[name]){
                setErrors(prev => ({
                    ...prev,
                    [name]: undefined
                }))
            }
        }

        const useRichTextEditor = (content: string, onUpdate: (content: string) => void) => {
            const editor = useEditor({
                extensions: [
                    StarterKit.configure({
                        bulletList: false,
                        orderedList: false,
                        listItem: false,
                    }),
                    Underline,
                    Link,
                    BulletList,
                    OrderedList,
                    ListItem,
                ],
                content,
                onUpdate: ({ editor }) => {
                    onUpdate(editor.getHTML());
                },
                editorProps: {
                    handleDOMEvents: {
                        beforeinput: () => false, // Prevents errors in SSR hydration
                    },
                },
            });
        
            useEffect(() => {
                if (editor && content && editor.getHTML() !== content) {
                    editor.commands.setContent(content);
                }
            }, [content, editor]);
        
            return editor;
        };
        
        const descriptionEditor = useRichTextEditor(
            jobData.description,
            (content) => handleEditorChange('description',content)
        )


        const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            const formData = new FormData(e.currentTarget);
            
            // Convert FormData to object for logging
            const formObject: Record<string, string> = {};
            formData.forEach((value, key) => {
                formObject[key] = value.toString();
            });
        
            console.log("Form Data:", formObject);
        };
        

        return(
            <div className='container mx-auto'>
                <h2>Job Posting Form</h2>
                <form onSubmit={handleSubmission}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label>Job Title</label>
                            <input type="text" name='title' id='title'  placeholder="Enter job title"/>
                        </div>
                        <div>
                            <label>Company</label>
                            <input type="text" name='company' id='company'  placeholder="Company name"/>
                        </div>
                        <div>
                            <label>Location</label>
                            <input type="text" name='location' id='location'  placeholder="Office location"/>
                        </div>
                        <div>
                            <label>Salary Range</label>
                            <input type="text" name='salary' id='salary'  placeholder="e.g., $50,000 to $70,000"/>
                        </div>
                        <div>
                            <label>Job Description</label>
                            <div className="border rounded overflow-hidden">
                                <EditorToolbar editor={descriptionEditor}/>
                                <EditorContent editor={descriptionEditor} />
                            </div>

                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }