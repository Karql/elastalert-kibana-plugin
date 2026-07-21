FROM docker.elastic.co/kibana/kibana:9.4.3

COPY ./plugins/elastalertKibanaPlugin-9.4.3.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.4.3.zip
