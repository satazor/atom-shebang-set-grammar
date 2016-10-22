'use babel';

export default {
	event: null,
	
	activate(state) {
		this.event = atom.workspace.observeTextEditors( this.callback );
	},
	
	callback(editor) {
		line = editor.lineTextForBufferRow(0);
		if (line.indexOf('#!') == 0) {
			if (line.indexOf('python') > -1) {
				editor.setGrammar(atom.grammars.grammarForScopeName('source.python'));
			}
		}
	},
	
	deactivate() {
		if (this.event != null) {
			this.event.dispose();
		}
	}
};