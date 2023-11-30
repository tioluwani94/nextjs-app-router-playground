import { defineGlobalStyles } from "@pandacss/dev";

export var globalCss = defineGlobalStyles({
    '.editor-heading-h1': {
        fontSize: '24px',
        color: 'rgb(5, 5, 5)',
        fontWeight: '700',
        margin: 0,
        marginBottom: '12px',
        padding: 0,
        lineHeight: '39px',
    },

    '.editor-heading-h2': {
        fontSize: '20px',
        fontWeight: '700',
        margin: 0,
        marginBottom: '12px',
        padding: 0,
        lineHeight: '32px',
    },

    '.editor-heading-h3': {
        fontSize: '18px',
        fontWeight: '700',
        margin: 0,
        marginBottom: '12px',
        padding: 0,
        lineHeight: '29px',
    },

    '.editor-heading-h4': {
        fontSize: '16px',
        fontWeight: '700',
        margin: 0,
        marginBottom: '12px',
        padding: 0,
        lineHeight: '26px',
    },

    '.editor-quote': {
        margin: 0,
        fontSize: '15px',
        paddingLeft: '16px',
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        color: 'rgb(101, 103, 107)',
        borderLeftColor: 'rgb(206, 208, 212)',
    },

    '.editor-list-ol': {
        padding: 0,
        margin: 0,
        listStyle: 'decimal!',
    },

    '.editor-list-ul': {
        padding: 0,
        margin: 0,
        listStyle: 'disc!',
    },

    '.editor-listitem': {
        margin: '8px 32px 8px 32px',
    },

    '.editor-nested-listitem': {
        listStyleType: 'none',
    },

    '.editor-table': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        maxWidth: '100%',
        overflowY: 'scroll',
        tableLayout: 'fixed',
        width: 'calc(100% - 25px)',
        margin: '30px 0',
    },

    '.article-content pre': {
        backgroundColor: 'rgb(240, 242, 245)',
        fontFamily: 'Menlo, Consolas, Monaco, monospace',
        display: 'block',
        padding: '8px 8px 8px 16px',
        lineHeight: 1.53,
        fontSize: '13px',
        margin: 0,
        marginTop: '8px',
        marginBottom: '8px',
        tabSize: 2,
        /* white-space: pre, */
        overflowX: 'auto',
        position: 'relative',
    },
    
    '.article-content hr': {
        padding: '2px 2px',
        border: 'none',
        margin: '1em 0',
        cursor: 'pointer',
    },
    
    '.article-content hr:after': {
        content: '" "',
        display: 'block',
        height: '2px',
        backgroundColor: '#ccc',
        lineHeight: '2px',
    },

    '.article-content details': {
        background: '#fcfcfc',
        border: '1px solid #eee',
        borderRadius: '10px',
        marginBottom: '8px',
    },
  
    '.article-content details summary': {
        cursor: 'pointer',
        padding: '5px 5px 5px 20px',
        position: 'relative',
        fontWeight: 'bold',
        listStyle: 'none',
        outline: 'none',
    },
  
    '.article-content details summary::marker': {
        display: 'none',
    },

    '.article-content details summary::-webkit-details-marker': {
        display: 'none',
    },
  
    '.article-content details summary:before': {
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderWidth: '4px 6px 4px 6px',
        borderLeftColor: '#000',
        display: 'block',
        content: '""',
        position: 'absolute',
        left: '7px',
        top: '50%',
        transform: 'translateY(-50%)',
    },
  
    '.article-content details[open] summary:before': {
        borderColor: 'transparent',
        borderWidth: '6px 4px 0 4px',
        borderTopColor: '#000',
    },
  
    '.article-content details div': {
        padding: '0 5px 5px 20px',
    },
  
    // '.article-content .Collapsible__collapsed details div': {
    //     display: 'none',
    //     userSelect: 'none',
    // }
});