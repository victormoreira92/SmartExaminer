import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { BoldIcon, ImageIcon, ItalicIcon, ListIcon, ListOrderedIcon, StrikethroughIcon, TableIcon, UnderlineIcon, PaletteIcon } from 'lucide-react';
import { TableKit } from '@tiptap/extension-table';

interface EditorQuestionProps {
  initialContent?: string;
  content?: string; // Prop para atualizar dinamicamente o conteúdo
  onContentChange?: (content: string) => void;
}

export default function EditorQuestion({ initialContent = '<p>Comece a escrever...</p>', content, onContentChange }: EditorQuestionProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TableKit,
      TextStyleKit,
      Color,
    ],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (onContentChange) {
        onContentChange(html);
      }
    },
  });

  // Atualizar o conteúdo dinamicamente quando a prop 'content' mudar
  useEffect(() => {
    if (editor && content !== undefined && editor.getHTML() !== content) {
      editor.commands.setContent(content, false); // 'false' evita foco automático
    }
  }, [editor, content]);

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="space-y-2 border border-gray-300 p-2 rounded-md">
      {/* Botões */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Negrito"
        >
          <BoldIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Itálico"
        >
          <ItalicIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Lista com marcadores"
        >
          <ListIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Lista numerada"
        >
          <ListOrderedIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Sublinhado"
        >
          <UnderlineIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Tachado"
        >
          <StrikethroughIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Inserir tabela"
        >
          <TableIcon size={20} />
        </button>

        <button
          onClick={() => {
            const url = prompt('URL da imagem:');
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          className="border border-gray-300 p-1 rounded-md hover:bg-gray-100"
          title="Inserir imagem"
        >
          <ImageIcon size={20} />
        </button>

        <button
          onClick={() => editor.chain().focus().setColor('#FF0000').run()}
          className="border border-gray-300 p-1 bg-red-500 rounded-md hover:bg-red-600"
          title="Cor vermelha"
        >
          <PaletteIcon className="text-white" size={20} />
        </button>

        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          className="h-8 w-8 border border-gray-300 rounded-md"
          title="Escolher cor"
        />
      </div>

      {/* Editor */}
      <div className="border border-gray-300 p-2 min-h-[200px] rounded-md">
        <EditorContent editor={editor} className="tiptap-editor" />
      </div>
    </div>
  );
}