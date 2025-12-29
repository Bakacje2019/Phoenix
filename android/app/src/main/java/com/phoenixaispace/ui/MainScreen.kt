package com.phoenixaispace.ui

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun MainScreen() {
    var text by remember { mutableStateOf("") }
    val messages = remember { mutableStateListOf<Pair<String, String>>() } // (sender, message)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "Phoenix AI Space",
            style = MaterialTheme.typography.headlineMedium
        )
        Spacer(modifier = Modifier.height(16.dp))
        // message list
        Column(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
        ) {
            messages.forEach { (sender, msg) ->
                Text(text = "$sender: $msg", modifier = Modifier.padding(vertical = 4.dp))
            }
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            OutlinedTextField(
                value = text,
                onValueChange = { text = it },
                placeholder = { Text("Type a message") },
                modifier = Modifier.weight(1f)
            )
            Spacer(Modifier.width(8.dp))
            Button(onClick = {
                if (text.isNotBlank()) {
                    messages.add("You" to text)
                    // TODO: send to backend via HTTP/WebSocket and append response
                    text = ""
                }
            }) {
                Text("Send")
            }
        }
    }
}